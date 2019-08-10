module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: ['airbnb-base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'no-console': [0],
        'no-underscore-dangle': [0]
    }
};
