/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

module.exports = {
    plugins: ["@typescript-eslint"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        project: true,
        extraFileExtensions: [".vue"]
    },
    extends: [
        "eslint-config-vue-cakkypamucm",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import-x/typescript",
        "prettier"
    ],
    /* eslint-enable sort-keys/sort-keys-fix */
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
                ignoreTypeReferences: true
            }
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "no-use-before-define": "off"
    }
    /* eslint-disable sort-keys/sort-keys-fix */
};
