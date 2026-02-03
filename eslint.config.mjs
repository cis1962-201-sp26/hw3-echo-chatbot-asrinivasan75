import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parser: tseslint.parser,
        },
        plugins: {
            js,
            unicorn: eslintPluginUnicorn,
            '@typescript-eslint': tseslint.plugin,
        },
    },
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        rules: {
            'no-lonely-if': 'error',
            eqeqeq: 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'prefer-template': 'error',
            'prefer-arrow-callback': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'consistent-return': 'off',

            // unicorn
            'unicorn/consistent-destructuring': 'error',
            'unicorn/error-message': 'error',
            'unicorn/no-abusive-eslint-disable': 'error',
            'unicorn/no-lonely-if': 'error',
            'unicorn/prefer-ternary': 'error',
        },
    },
]);
