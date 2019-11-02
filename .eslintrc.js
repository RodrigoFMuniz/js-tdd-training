module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "babel"
    ],
    "rules": {
        "babel/new-cap": 1,
        "babel/camelcase": 1,
        "babel/no-invalid-this": 1,
        "babel/object-curly-spacing": 1,
        "babel/quotes": 1,
        "babel/semi": 0,
        "babel/no-unused-expressions": 1,
        "babel/valid-typeof": 1
    }
};