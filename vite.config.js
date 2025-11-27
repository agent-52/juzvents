// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { createRequire } from 'module'
const requireCJS = createRequire(import.meta.url)

const to = (p) => path.resolve(__dirname, 'node_modules', p)

// plugin to resolve ids that end with ?commonjs-external to real files
function fixCommonjsExternalPlugin() {
  return {
    name: 'fix-commonjs-external-react',
    enforce: 'pre',
    resolveId(source) {
      try {
        if (!source || typeof source !== 'string') return null

        if (source.endsWith('?commonjs-external')) {
          const base = source.replace(/\?commonjs-external$/, '')

          // case A: relative cjs path like './cjs/react.production.min.js'
          if (base.startsWith('./cjs/')) {
            const candidate = path.resolve(__dirname, 'node_modules', 'react', base.replace(/^\.\//, ''))
            if (fs.existsSync(candidate)) return candidate
          }

          // case B: 'react/cjs/...' or other react paths
          if (base.startsWith('react/cjs/') || base.startsWith('react/')) {
            const candidate = path.resolve(__dirname, 'node_modules', base)
            if (fs.existsSync(candidate)) return candidate
          }

          // case C: direct filename like 'react.production.min.js'
          if (base.endsWith('.production.min.js') || base.endsWith('.development.js')) {
            const candidate = path.resolve(__dirname, 'node_modules', 'react', 'cjs', path.basename(base))
            if (fs.existsSync(candidate)) return candidate
          }
        }
      } catch (e) {
        /* fallthrough */
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    fixCommonjsExternalPlugin(),
    react()
  ],

  resolve: {
    alias: [
      // React corrections (map to ESM entrypoints)
      { find: /^react$/, replacement: to('react/index.js') },
      { find: /^react-dom$/, replacement: to('react-dom/index.js') },

      // explicit mapping of common CJS file names to ESM runtime
      { find: 'react/cjs/react.production.min.js', replacement: to('react/index.js') },
      { find: 'react/cjs/react.development.js', replacement: to('react/index.js') },

      { find: 'react/cjs/react-jsx-runtime.production.min.js', replacement: to('react/jsx-runtime.js') },
      { find: 'react/cjs/react-jsx-runtime.development.js', replacement: to('react/jsx-dev-runtime.js') },
      { find: 'react/cjs/react-jsx-dev-runtime.development.js', replacement: to('react/jsx-dev-runtime.js') },
      { find: 'react/cjs/react-jsx-runtime.production.min.js', replacement: to('react/jsx-runtime.js') },

      // catch-alls
      { find: 'react/cjs', replacement: to('react') },
      { find: 'react/jsx-runtime', replacement: to('react/jsx-runtime.js') },
      { find: 'react/jsx-dev-runtime', replacement: to('react/jsx-dev-runtime.js') },

      // Node builtins -> browser polyfills (axios needs stream; other libs may need buffer)
      { find: 'stream', replacement: requireCJS.resolve('stream-browserify') },
      { find: 'buffer', replacement: requireCJS.resolve('buffer/') },

      // If axios built-in browser cjs path is preferable, map it (optional but safe)
      { find: 'axios', replacement: requireCJS.resolve('axios/dist/browser/axios.cjs') }
    ],
    // prefer browser/module fields
    conditions: ['browser', 'import', 'module', 'default'],
    mainFields: ['module', 'jsnext:main', 'main']
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'axios',
      'stream',
      'buffer'
    ],
    esbuildOptions: {
      // Node polyfills for dev prebundle
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true }),
        NodeModulesPolyfillPlugin()
      ],
      loader: { '.js': 'jsx' }
    }
  },

  ssr: {
    // ensure react & react-dom get bundled (avoid external ?commonjs-external ids)
    noExternal: ['react', 'react-dom']
  },

  build: {
    commonjsOptions: {
      include: [/node_modules/, /\/node_modules\//],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: []
    }
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    // ensure global exists for some polyfills
    'global': 'globalThis',
    'globalThis.process': JSON.stringify({ env: {} })
  }
})
