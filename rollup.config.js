import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/request-permission.js',
  output: {
    file: 'dist/request-permission.js',
    format: 'es',
    name: 'request-permission',
    exports: 'named',
  },
  plugins: [terser()],
}
