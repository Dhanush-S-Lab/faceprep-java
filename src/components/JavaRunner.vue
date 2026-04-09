<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
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

// Auto-detect environment: localhost dev vs Vercel production
const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000/api/run-java'
  : '/api/run-java'

const props = defineProps({
  question: {
    type: String,
    default: ''
  },
  initialCode: {
    type: String,
    default: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}'
  }
})

const editorContainer = ref(null)
const input = ref('')
const output = ref('')
const isRunning = ref(false)
const isError = ref(false)
let editorInstance = null

onMounted(() => {
  nextTick(() => {
    if (editorContainer.value) {
      editorInstance = monaco.editor.create(editorContainer.value, {
        value: props.initialCode,
        language: 'java',
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

const executeCode = async () => {
  if (!editorInstance) return

  isRunning.value = true
  output.value = 'Compiling and Running...'
  isError.value = false

  try {
    const code = editorInstance.getValue()
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, input: input.value })
    })

    let data
    try { data = await res.json() } catch (e) {}

    if (!res.ok) {
      throw new Error(data?.error || 'Unknown Error')
    }

    if (data.success) {
      output.value = data.data?.output || 'No output.'
      if (data.data?.error) {
        isError.value = true
        output.value += '\n' + data.data.error
      }
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
      <div class="question-icon">📌</div>
      <div class="question-text">{{ question }}</div>
    </div>

    <div class="editor-wrapper">
      <div class="mac-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="filename">Main.java</span>
        <button @click="executeCode" :disabled="isRunning" class="run-btn" :class="{ running: isRunning }">
          <span class="icon">{{ isRunning ? '⚙' : '▶' }}</span>
          {{ isRunning ? 'Running' : 'Run' }}
        </button>
      </div>
      <div ref="editorContainer" class="editor-container"></div>
    </div>

    <div class="io-panels">
      <div class="pane input-pane">
        <label>Standard Input <span class="sub-label">(If required)</span></label>
        <textarea v-model="input" placeholder="Type inputs to Scanner here..."></textarea>
      </div>
      <div class="pane output-pane">
        <label>Console Output</label>
        <pre :class="{ error: isError }">{{ output }}</pre>
      </div>
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
  gap: 8px;
  padding: 10px 16px;
  background: #f1f5f9;
  border-bottom: 1px solid #cbd5e1;
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }

.filename {
  margin-left: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: #64748b;
  flex-grow: 1;
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
  padding: 0.4rem 1.25rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(255, 89, 0, 0.25);
}

.run-btn:hover:not(:disabled) {
  background: #e04d00;
  transform: translateY(-1px);
}

.run-btn:disabled {
  background: #ffb380;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.run-btn.running .icon {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
