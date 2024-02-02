import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
export default {
  input: "./src/style.js",
  output: {
    file: './dist/styles/index.css',
  },
  plugins:[
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()
      ],
      extract: 'index.css'  
    }),
    terser(),
    filesize()
  ]
}