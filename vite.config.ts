import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    noExternal: [
      'monaco-editor',
      'popmotion',
      'style-value-types',
      'unhead',
      '@unhead/vue',
      '@floating-ui/core',
      '@vueuse/core',
      '@slidev/parser',
      '@slidev/client'
    ]
  }
})
