module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                parser: 'flow'
            }
        ]
    }
};
