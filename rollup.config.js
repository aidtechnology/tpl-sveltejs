import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import liveReload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import includePaths from 'rollup-plugin-includepaths'

// Svelte configuration
const config = require('./svelte.config.js')

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    // Svelte compiler
    // https://github.com/sveltejs/rollup-plugin-svelte
    svelte({
      dev: !config.production,
      css: (css) => {
        css.write('public/build/bundle.css')
      },
      preprocess: config.preprocess,
    }),

    // NodeJS resolve
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),

    // Use absolute paths for cleaner module imports
    // https://github.com/dot-build/rollup-plugin-includepaths
    includePaths(config.includePaths),

    // Typescript support
    // https://github.com/rollup/plugins/tree/master/packages/typescript
    typescript(),

    // Convert CommonJS to ES6
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs(),

    // Manually set NODE_ENV when not already set. Required for
    // example to run in the browser components that need it.
    config.production
      ? replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
      : replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !config.production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !config.production && liveReload('public'),

    // Minify production build (npm run build)
    config.production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}

function serve() {
  let started = false

  return {
    writeBundle() {
      if (!started) {
        started = true
        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        })
      }
    },
  }
}
