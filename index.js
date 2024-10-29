
const globals = require("globals");

module.exports = [

    // Default language options
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },

    // Rules
    ...[
        "./rules/style.js"
    ].map(require)
];
