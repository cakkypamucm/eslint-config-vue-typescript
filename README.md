This is `eslint` config based on [cakkypamucm/eslint-config-vue](https://github.com/cakkypamucm/eslint-config-vue) with `typescript` support

### Install

```shell
npm i github:cakkypamucm/eslint-config-vue-typescript --save-dev
```

### Usage notes

- config includes [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) already
- so just enable `typescript` resolver to correct working `import-x/no-unresolved` rule:

```json
{
    "settings": {
        "import-x/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    }
}
```

- see also [cakkypamucm/eslint-config usage notes](https://github.com/cakkypamucm/eslint-config?tab=readme-ov-file#usage-notes)
