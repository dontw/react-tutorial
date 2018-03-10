module.exports = {
  "extends": "airbnb",
  "globals": {
    "axios": false
  },
  "env": {
    "jest": true,
  },
  "rules": {
    "import/extensions": 0,
    
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-static-element-interactions":0,
    
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 0,

    "no-return-assign": 0,
    "no-console": 0
  }
}