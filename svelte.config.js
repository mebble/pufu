// src: https://github.com/mihar-22/svelte-jester#typescript
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
    preprocess: sveltePreprocess({
        tsConfigFile: './tsconfig.json'
    }),
};
