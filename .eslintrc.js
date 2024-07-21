module.exports = {
    // Autres configurations...
    rules: {
      'no-mixed-operators': 'off',
      'no-sequences': 'off',
      'no-unused-expressions': 'off',
    },
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "rules": {
      // Your custom rules here
    }
  }