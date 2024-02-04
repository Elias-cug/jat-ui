import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import url from "@rollup/plugin-url";
import postcssurl from 'postcss-url';

export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/lib/jat-ui.umd.js',
      format: 'umd',
      name: 'JatUI'  
    },
    {
      file: './dist/lib/jat-ui.es.js',
      format: 'es'
    },
    {
      file: './dist/lib/jat-ui.cjs.js',
      format: 'cjs'
    }
  ],
  external:[
    'vue',
    'element-ui'
  ],
  plugins:[
    babel({
        exclude: 'node_modules/**'
    }),
    commonjs(),
    copy({
      targets: [
        { src: "package.json", dest: "dist" },
        { src: ".babelrc", dest: "dist" },
        { src: "packages/", dest: "dist/" },
        { src: "src/", dest: "dist/" }
      ]
    }),
    vue({
      style: {
        postcssPlugins: [
          autoprefixer(),
          cssnano()
        ]
      }
    }),
    terser(),
    filesize(),
  ],
  extraRollupPlugins: [
    url({
      // 1MB
      limit: 1 * 1024 * 1024,
    }),
  ],
  extraPostCSSPlugins: [
    postcssurl({
      url: 'inline',
    }),
  ],
}