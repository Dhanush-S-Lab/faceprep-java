<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

// Silence the web-worker fallback warning by registering the native Vite worker
if (typeof window !== 'undefined') {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      return new EditorWorker()
    }
  }
}

// Proxy routes `/api/run` locally to bypass CORS and injects key; Vercel routes it to serverless func in prod.
const API_URL = '/api/run'

const STARTER_CODE = {
  java:   'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
  cpp:    '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
  python: 'print("Hello, Python!")'
}

const LANGUAGE_META = {
  java:   { label: 'Java',   filename: 'Main.java',  monaco: 'java',   pytutor: 'java'   },
  cpp:    { label: 'C++',    filename: 'main.cpp',   monaco: 'cpp',    pytutor: 'cpp'    },
  python: { label: 'Python', filename: 'main.py',    monaco: 'python', pytutor: '3'      }
}

// ── Pyodide (run Python in-browser via WebAssembly) ──────────────────────────
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js'
let pyodideInstance = null
const pyodideLoading = ref(false)
const pyodideReady  = ref(false)

async function ensurePyodide() {
  if (pyodideInstance) return pyodideInstance
  pyodideLoading.value = true
  // Inject the CDN script once
  if (!document.getElementById('pyodide-script')) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.id  = 'pyodide-script'
      s.src = PYODIDE_CDN
      s.onload  = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
  }
  // loadPyodide is now on window after the script loads
  pyodideInstance = await window.loadPyodide()
  pyodideLoading.value = false
  pyodideReady.value   = true
  return pyodideInstance
}

async function runWithPyodide(code, stdinText) {
  const py = await ensurePyodide()

  // Build a list of lines for input() to consume
  const lines = stdinText ? stdinText.split('\n') : []
  let lineIndex = 0

  // Capture output
  let stdout = ''
  let stderr = ''

  py.setStdout({ batched: (s) => { stdout += s + '\n' } })
  py.setStderr({ batched: (s) => { stderr += s + '\n' } })

  // Mock input() so it consumes the pre-filled stdin lines
  py.globals.set('_input_lines', py.toPy(lines))
  py.runPython(`
import builtins, sys, io
_input_idx = 0
def _mocked_input(prompt=''):
    global _input_idx
    if prompt:
        print(prompt, end='')
    if _input_idx < len(_input_lines):
        val = _input_lines[_input_idx]
        _input_idx += 1
        return val
    return ''
builtins.input = _mocked_input
`)

  try {
    await py.runPythonAsync(code)
    return { output: stdout.trimEnd() || '(no output)', error: null }
  } catch (e) {
    return { output: null, error: stderr.trimEnd() || e.message }
  } finally {
    // Restore defaults so next run is clean
    py.setStdout({})
    py.setStderr({})
  }
}

const props = defineProps({
  question: {
    type: String,
    default: ''
  },
  initialCode: {
    type: String,
    default: ''
  },
  initialLanguage: {
    type: String,
    default: 'java'
  }
})

const selectedLanguage = ref(props.initialLanguage)
const filename = computed(() => LANGUAGE_META[selectedLanguage.value].filename)

const editorContainer = ref(null)
const input = ref('')
const output = ref('')
const isRunning = ref(false)
const isError = ref(false)
let editorInstance = null

const switchLanguage = (lang) => {
  if (lang === selectedLanguage.value || !editorInstance) return
  selectedLanguage.value = lang
  // Update Monaco language mode
  monaco.editor.setModelLanguage(editorInstance.getModel(), LANGUAGE_META[lang].monaco)
  // Reset to boilerplate for the new language
  editorInstance.setValue(STARTER_CODE[lang])
  output.value = ''
  isError.value = false
  showVisualizer.value = false
}

onMounted(() => {
  nextTick(() => {
    if (editorContainer.value) {
      const startCode = props.initialCode || STARTER_CODE[selectedLanguage.value]
      editorInstance = monaco.editor.create(editorContainer.value, {
        value: startCode,
        language: LANGUAGE_META[selectedLanguage.value].monaco,
        theme: 'vs-dark',
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        fontSize: 14,
        padding: { top: 12, bottom: 12 }
      })

      // Bubble-phase key trap: Monaco handles keys first, then we stop propagation
      // so Slidev's global shortcuts (Space, ArrowLeft, etc.) don't fire.
      const trapKeys = (e) => e.stopPropagation()
      editorContainer.value.addEventListener('keydown', trapKeys, false)
      editorContainer.value.addEventListener('keyup', trapKeys, false)

      // Auto-grow editor height based on content
      const updateHeight = () => {
        if (!editorInstance) return
        const contentHeight = Math.max(150, editorInstance.getContentHeight())
        editorContainer.value.style.height = `${contentHeight}px`
        editorInstance.layout()
      }
      editorInstance.onDidContentSizeChange(updateHeight)
      setTimeout(updateHeight, 100)
    }
  })
})

onUnmounted(() => {
  if (editorInstance) {
    editorInstance.dispose()
  }
})

const showVisualizer = ref(false)
const visualizerUrl = ref('')
const editorTheme = ref('vs-dark')
const fontSize = ref(14)
const wordWrap = ref('off')

const toggleTheme = () => {
  editorTheme.value = editorTheme.value === 'vs-dark' ? 'vs' : 'vs-dark'
  monaco.editor.setTheme(editorTheme.value)
}

const changeFontSize = (delta) => {
  fontSize.value = Math.max(10, Math.min(32, fontSize.value + delta))
  if (editorInstance) editorInstance.updateOptions({ fontSize: fontSize.value })
  // Force layout update internally 
  setTimeout(() => { if (editorInstance) editorInstance.layout() }, 50)
}

const toggleWordWrap = () => {
  wordWrap.value = wordWrap.value === 'off' ? 'on' : 'off'
  if (editorInstance) editorInstance.updateOptions({ wordWrap: wordWrap.value })
}

const resetCode = () => {
  if (editorInstance && confirm('Are you sure you want to reset your code to the starter template?')) {
    editorInstance.setValue(props.initialCode || STARTER_CODE[selectedLanguage.value])
    output.value = ''
    isError.value = false
    showVisualizer.value = false
  }
}

const visualizeCode = () => {
  if (!editorInstance) return
  
  const code = editorInstance.getValue()
  // PythonTutor py param: 'java' | 'cpp' | '3' (Python 3)
  const pyLang = LANGUAGE_META[selectedLanguage.value].pytutor
  const encodedCode = encodeURIComponent(code)

  // Pre-populate stdin lines from our input textarea so PythonTutor
  // doesn't show its own input form (which navigates to a new page).
  // Split on newlines, keep non-empty lines only.
  const stdinLines = input.value
    ? input.value.split('\n').filter(line => line !== '')
    : []
  const rawInputJson = encodeURIComponent(JSON.stringify(stdinLines))
  
  visualizerUrl.value = `https://pythontutor.com/iframe-embed.html#code=${encodedCode}&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=${pyLang}&rawInputLstJSON=${rawInputJson}&textReferences=false`
  
  showVisualizer.value = true
}

const executeCode = async () => {
  if (!editorInstance) return

  isRunning.value = true
  isError.value   = false

  // ── Python: run entirely in-browser via Pyodide ──────────────────────────
  if (selectedLanguage.value === 'python') {
    output.value = pyodideReady.value
      ? 'Running Python...'
      : '⏳ Loading Python runtime (first run only)...'
    try {
      const code = editorInstance.getValue()
      const result = await runWithPyodide(code, input.value)
      if (result.error) {
        isError.value = true
        output.value  = result.error
      } else {
        output.value = result.output
      }
    } catch (err) {
      isError.value = true
      output.value  = err.message
    } finally {
      isRunning.value = false
    }
    return
  }

  // ── Java / C++: use backend API ───────────────────────────────────────────
  output.value = 'Compiling and Running...'

  try {
    const code = editorInstance.getValue()
    const headers = { 'Content-Type': 'application/json' }
    
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ code, input: input.value, language: selectedLanguage.value })
    })

    let data = {}
    try { data = await res.json() } catch (e) {}

    let resultObj = data
    if (data && data.success !== undefined && data.data) {
      resultObj = data.data
    }

    if (!res.ok) {
      const errMsg = resultObj?.error || data?.error || 'Unknown Error'
      throw new Error(errMsg)
    }

    if (resultObj.error) {
      isError.value = true
      output.value = resultObj.error
    } else if (resultObj.output !== undefined) {
      isError.value = false
      output.value = resultObj.output || 'No output.'
    } else {
      isError.value = true
      output.value = data.error || 'Execution failed.'
    }
  } catch (err) {
    isError.value = true
    output.value = err.message.replace(/\\n/g, '\n').replace(/\\t/g, '\t')
  } finally {
    isRunning.value = false
  }
}
</script>

<template>
  <div class="java-runner">
    <div v-if="question" class="question-pane">
      <div class="i-lucide-help-circle question-icon"></div>
      <div class="question-text">{{ question }}</div>
    </div>

    <div class="editor-wrapper">
      <div class="mac-header">
        <!-- Left: stable dots + filename group -->
        <div class="header-left">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="filename">{{ filename }}</span>
        </div>

        <!-- Right: all controls -->
        <div class="header-right">
          <!-- Editor Toolbar -->
          <div class="toolbar">
            <button class="icon-btn" @click="resetCode" title="Reset Code">
              <div class="i-lucide-rotate-ccw"></div>
            </button>
            <button class="icon-btn" @click="toggleTheme" title="Toggle Theme">
              <div v-if="editorTheme === 'vs-dark'" class="i-lucide-sun"></div>
              <div v-else class="i-lucide-moon"></div>
            </button>
            <button class="icon-btn" @click="changeFontSize(-1)" title="Decrease Font">
              <div class="i-lucide-minus"></div>
            </button>
            <button class="icon-btn" @click="changeFontSize(1)" title="Increase Font">
              <div class="i-lucide-plus"></div>
            </button>
            <button class="icon-btn" @click="toggleWordWrap" :class="{ 'wrap-active': wordWrap === 'on' }" title="Toggle Word Wrap">
              <div class="i-lucide-wrap-text"></div>
            </button>
          </div>

          <!-- Language Selector -->
          <div class="lang-selector">
            <button
              v-for="(meta, key) in LANGUAGE_META"
              :key="key"
              class="lang-btn"
              :class="{ active: selectedLanguage === key }"
              @click="switchLanguage(key)"
              :disabled="isRunning"
            >
              {{ meta.label }}
            </button>
          </div>

          <button @click="visualizeCode" :disabled="isRunning" class="visualize-btn">
            <div class="i-lucide-eye"></div> Visualize
          </button>

          <!-- Browser badge shown only for Python -->
          <span v-if="selectedLanguage === 'python'" class="browser-badge">
            <div class="i-lucide-zap"></div> In-Browser
          </span>

          <button @click="executeCode" :disabled="isRunning" class="run-btn" :class="{ running: isRunning }">
            <div v-if="isRunning" class="i-lucide-loader-2 animate-spin"></div>
            <div v-else class="i-lucide-play"></div>
            {{ isRunning ? 'Running' : 'Run' }}
          </button>
        </div>
      </div>
      <div ref="editorContainer" class="editor-container"></div>
    </div>

    <div v-show="!showVisualizer" class="io-panels">
      <div class="pane input-pane">
        <label>Standard Input <span class="sub-label">(If required)</span></label>
        <textarea
          v-model="input"
          :placeholder="selectedLanguage === 'python' ? 'Values for input() calls, one per line...' : 'Type inputs to Scanner here...'"
        ></textarea>
      </div>
      <div class="pane output-pane">
        <label>Console Output</label>
        <pre :class="{ error: isError }">{{ output }}</pre>
      </div>
    </div>

    <div v-if="showVisualizer" class="visualizer-pane pane">
      <div class="visualizer-header">
        <label>Memory Visualizer</label>
        <button @click="showVisualizer = false" class="close-btn">
          <div class="i-lucide-x"></div> Close
        </button>
      </div>
      <iframe :src="visualizerUrl" width="100%" height="500" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
.java-runner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.question-pane {
  display: flex;
  gap: 0.75rem;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 5px solid #ff5900;
  font-size: 1rem;
  font-weight: 500;
  color: #334155;
}

.editor-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #cbd5e1;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.mac-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: #f1f5f9;
  border-bottom: 1px solid #cbd5e1;
}

/* Left group: dots + filename — never shrinks or wraps */
.header-left {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

/* Right group: all controls — allowed to shrink together if needed */
.header-right {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }

.filename {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: #64748b;
}

.editor-container {
  width: 100%;
}

.io-panels {
  display: flex;
  gap: 1rem;
}

.pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.pane label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sub-label {
  font-weight: 400;
  text-transform: none;
  color: #94a3b8;
  letter-spacing: 0;
}

.pane textarea, .pane pre {
  width: 100%;
  min-height: 90px;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #0f172a;
  resize: vertical;
}

.pane textarea:focus {
  outline: none;
  border-color: #ff5900;
  box-shadow: 0 0 0 3px rgba(255, 89, 0, 0.1);
}

.pane pre.error {
  background: #fef2f2;
  border-color: #fca5a5;
  color: #991b1b;
}

.run-btn {
  background: #ff5900;
  color: white;
  border: none;
  /* Fixed width prevents layout shift when text swaps Run ↔ Running */
  min-width: 84px;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-shrink: 0;
  transition: background 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(255, 89, 0, 0.25);
}

.run-btn:hover:not(:disabled) {
  background: #e04d00;
  transform: translateY(-1px);
}

.run-btn:disabled, .visualize-btn:disabled {
  background: #ffb380;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.visualize-btn {
  background: #475569;
  color: white;
  border: none;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-shrink: 0;
  transition: background 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(71, 85, 105, 0.25);
  /* margin-right removed — gap handles spacing */
}

.visualize-btn:hover:not(:disabled) {
  background: #334155;
  transform: translateY(-1px);
}

.visualizer-pane {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.visualizer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #e2e8f0;
  border-bottom: 1px solid #cbd5e1;
}

.close-btn {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.35rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: background 0.15s ease;
}

.close-btn:hover {
  background: #dc2626;
}

.icon-btn > div, .visualize-btn > div, .run-btn > div {
  font-size: 1.1em;
}

/* Language Selector */
.lang-selector {
  display: flex;
  gap: 2px;
  background: #e2e8f0;
  border-radius: 6px;
  padding: 2px;
  flex-shrink: 0;
  /* margin-left:auto removed — .filename flex-grow already pushes this to the right */
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.02em;
}

.toolbar {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
}

.icon-btn {
  background: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}

.icon-btn:hover {
  background: #e2e8f0;
  color: #334155;
}

.icon-btn.wrap-active {
  background: #cbd5e1;
  color: #ff5900;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.lang-btn:hover:not(:disabled):not(.active) {
  background: #f1f5f9;
  color: #334155;
}

.lang-btn.active {
  background: #ff5900;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(255, 89, 0, 0.35);
}

.lang-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Python in-browser badge */
.browser-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #dcfce7;
  color: #15803d;
  border: 1px solid #bbf7d0;
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-right: 4px;
  white-space: nowrap;
}
</style>
