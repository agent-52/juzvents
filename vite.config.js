// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolveTo = (p) => path.resolve(__dirname, 'node_modules', p)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Redirect CommonJS react paths to ESM entrypoints
      { find: 'react/cjs/react.development.js', replacement: resolveTo('react/index.js') },
      { find: 'react/cjs/react.production.min.js', replacement: resolveTo('react/index.js') },

      // JSX runtime CJS -> point to ESM jsx runtime
      { find: 'react/cjs/react-jsx-dev-runtime.development.js', replacement: resolveTo('react/jsx-dev-runtime.js') },
      { find: 'react/cjs/react-jsx-runtime.development.js', replacement: resolveTo('react/jsx-runtime.js') },
      { find: 'react/cjs/react-jsx-runtime.production.min.js', replacement: resolveTo('react/jsx-runtime.js') },
      { find: 'react/cjs/react-jsx-dev-runtime.production.min.js', replacement: resolveTo('react/jsx-dev-runtime.js') },

      // Catch-all helpers (safe fallback)
      { find: 'react/cjs', replacement: resolveTo('react') },
      { find: 'react/jsx-runtime', replacement: resolveTo('react/jsx-runtime.js') },
      { find: 'react/jsx-dev-runtime', replacement: resolveTo('react/jsx-dev-runtime.js') },
    ]
  },

  // Help Vite/Rollup pre-bundle / include React ESM entrypoints
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ],
  },

  // When building SSR or running on some Vercel environments, force bundling for these
  ssr: {
    noExternal: ['react', 'react-dom']
  },

  // Optional: ensure NODE_ENV is set during build (usually handled by Vite)
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})
