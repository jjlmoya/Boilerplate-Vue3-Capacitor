module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'vue/no-deprecated-slot-attribute': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'template-curly-spacing': ['off'],
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'any',
                component: 'always'
            }
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 4,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/no-v-html': 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
