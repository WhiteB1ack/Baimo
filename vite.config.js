import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
        about: resolve(__dirname,'about.html'),
        notes: resolve(__dirname,'notes.html'),
        projects: resolve(__dirname,'projects.html'),

        phaseStudy01: resolve(__dirname,'projects/GLSL/phase-study-01/index.html'),
        shapeStudy01: resolve(__dirname,'projects/GLSL/shape-study-01/index.html'),

        phaseStudy02: resolve(__dirname,'projects/GLSL/phase-study-02-HSB/index.html'),

        blenderStudy01: resolve(__dirname,'projects/Blender/project-study-01/index.html'),
      },
      chunkSizeWarningLimit:1000
    }
  }
})