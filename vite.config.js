import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        notes: resolve(__dirname, 'notes.html'),
        projects: resolve(__dirname, 'projects.html'),

        phaseStudy01: resolve(
          __dirname,
          'projects/GLSL/phase-study-01/index.html'
        ),

        shapeStudy01: resolve(
          __dirname,
          'projects/GLSL/shape-study-01/index.html'
        )
      }
    }
  }
})