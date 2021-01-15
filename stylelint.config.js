module.exports = {
    ignoreFiles: ['**/*.js', 'dist/**/*.css'],
    rules: {
        indentation: [2, { baseIndentLevel: 1 }],
        'length-zero-no-unit': [true, {
            ignore: ['custom-properties']
        }]
    }
}
