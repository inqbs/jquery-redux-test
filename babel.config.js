module.exports = {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'DocumentFragment' }]
  ],
  sourceMaps: true
}
