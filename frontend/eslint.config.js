import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        // Применяем настройки парсера для всех соответствующих файлов
        files: ['**/*.ts', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
    },
    {
        // Общие правила для TS и JS
        files: ['**/*.ts', '**/*.js'],
        rules: {
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'indent': ['error', 4],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
        },
    },
    {
        // Специальные правила для Vue
        files: ['**/*.vue'],
        rules: {
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
            'vue/multi-word-component-names': 'off',

            // ВАЖНО: Отключаем базовый indent, так как vue/script-indent берет это на себя
            'indent': 'off',
            '@typescript-eslint/indent': 'off',
        },
    },
);