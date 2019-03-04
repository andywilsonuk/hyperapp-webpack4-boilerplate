module.exports = {
    extends: 'airbnb-base',
    plugins: [
        'import',
        'react',
        'jest',
    ],
    rules: {
        'linebreak-style': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-unused-vars': [2, { varsIgnorePattern: 'h' }],
        'react/jsx-uses-vars': 2,
        indent: 'off',
        'no-continue': 'off',
        'import/no-extraneous-dependencies': 'off',
        'unicode-bom': 'off',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        jest: true,
    },
};
