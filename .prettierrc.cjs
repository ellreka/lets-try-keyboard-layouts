module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  overrides: [
    {
      files: './src/keyboard.json',
      options: {
        printWidth: 300
      }
    }
  ]
}
