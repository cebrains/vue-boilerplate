module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-cssnext": {},
    "postcss-plugin-bem-atrule": {
      "defaultNamespace": undefined,
      "style": "suit",
      "separators": {
        "descendent": "__",
        "modifier": "--"
      },
      "shortcuts": {
        "utility": "util",
        "component": "b",
        "modifier": "m",
        "descendent": "e"
      }
    },
   
  }
}
