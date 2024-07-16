import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:n/recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jquery,
            ...globals.node,
            config: true,
            environment: true,
            PhotoSwipe: true,
            PhotoSwipeLightbox: true,
        },

        ecmaVersion: 2022,
        sourceType: "commonjs",
    },
    rules: {
        "n/no-unpublished-require": "off",
        "n/no-unpublished-import": "off",
        "n/no-process-exit": "off",
        "n/no-missing-import": "off",
        "n/no-missing-require": "off",
        curly: "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "guard-for-in": "error",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-debugger": "error",
        "no-empty": "error",

        "no-empty-function": ["error", {
            allow: ["constructors"],
        }],

        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-unused-labels": "error",
        "no-multi-spaces": "error",
        "no-var": "error",
        "no-case-declarations": "off",
        "object-curly-spacing": ["error", "always"],
        quotes: ["error", "single"],
        radix: "error",
        semi: "off",
        "space-infix-ops": "error",
    },
}];
