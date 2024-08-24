/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const errorRules = {
    "@stylistic/lines-around-comment": [
        "error",
        { allowBlockStart: true, beforeBlockComment: false, beforeLineComment: true }
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-use-before-define": [
        "error",
        {
            functions: false,
            ignoreTypeReferences: true
        }
    ],
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/restrict-plus-operands": ["error", { allowNumberAndString: true }],
    "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
    "@typescript-eslint/switch-exhaustiveness-check": "error"
};
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const offRules = {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off", // @see https://github.com/vuejs/vue-eslint-parser/issues/240
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "no-use-before-define": "off"
};
/* eslint-disable sort-keys/sort-keys-fix */

// vue's own typing inevitably contains some `any`s, so some of the `no-unsafe-*` rules can't be used
// @see https://github.com/vuejs/eslint-config-typescript/blob/e0ca8427e42e0c6a5a8c5accd8b9408c7e802f45/src/internals.ts#L133
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
    rules: {
        ...errorRules,
        ...offRules
    }
};
