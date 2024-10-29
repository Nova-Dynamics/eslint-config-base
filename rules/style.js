
module.exports = {
    plugins: {
        "@stylistic": require("@stylistic/eslint-plugin-js")
    },
    rules: {
        // Indent set to 4
        "@stylistic/indent": [
            "error",
            4,
            {
                SwitchCase: 1,               // Switches are fully indented
                VariableDeclarator: "first", // line up variables with first name
                flatTernaryExpressions: true
            }
        ],


        "@stylistic/array-bracket-newline": [
            "error", "consistent"
        ],
        "@stylistic/array-bracket-spacing": [
            "error",
            "always",
            {
                singleValue: false,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        "@stylistic/array-element-newline": [
            "error", "consistent"
        ],
        "@stylistic/arrow-parens": [
            "error", "always"
        ],
        "@stylistic/arrow-spacing": [
            "error"
        ],
        "@stylistic/block-spacing": [
            "error", "always"
        ],
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true
            }
        ],
        "@stylistic/comma-dangle": ["error"],
        "@stylistic/comma-spacing": [
            "error",
            {
                before: false,
                after: true
            }
        ],
        "@stylistic/comma-style": [ "error", "last" ],
        "@stylistic/computed-property-spacing": [ "error", "never" ],

        "@stylistic/dot-location": [
            "error", "property" // dots follow properties, not objects
        ],

        "@stylistic/function-call-spacing": [
            "error", "never"
        ],
        "@stylistic/function-call-argument-newline": [
            "error", "consistent"
        ],

        "@stylistic/key-spacing": [ "error", { "beforeColon": false }],

        "@stylistic/linebreak-style": [
            "error", "unix" // Git rekt, Billy G.
        ],

        "@stylistic/lines-between-class-members": [
            "error", "always"
        ],

        "@stylistic/max-len": [ "warn", { "code": 120 }], // for Jonathan -- stop it bro.

        "@stylistic/no-trailing-spaces": ["error"]
    }
}
