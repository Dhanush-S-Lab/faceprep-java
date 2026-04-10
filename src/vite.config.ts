import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      proxy: {
        '/api/run': {
          target: env.VITE_EXECUTION_API_URL ? new URL(env.VITE_EXECUTION_API_URL).origin : 'http://136.111.214.182:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/run/, '/run'),
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
               if (env.VITE_EXECUTION_API_KEY) {
                 proxyReq.setHeader('x-api-key', env.VITE_EXECUTION_API_KEY)
               }
            })
          }
        }
      }
    },
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
  }
})
