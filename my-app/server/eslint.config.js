export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
