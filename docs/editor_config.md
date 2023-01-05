# Configure the editor/IDE

We recommend [Visual Studio Code](https://code.visualstudio.com/) as it has many extensions that will help, there are some of them:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Svelte 3 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  Configuration files:

  - `tfgrid_stats/.prettierrc`

    ```js
    {
      "printWidth": 120,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": false,
      "quoteProps": "as-needed",
      "jsxSingleQuote": false,
      "trailingComma": "all",
      "bracketSpacing": true,
      "arrowParens": "avoid",
      "endOfLine": "auto",
      "svelteSortOrder": "options-scripts-markup-styles",
      "plugins": ["prettier-plugin-svelte"]
    }

    ```

  - `tfgrid_stats/.prettierignore`

    ```txt
    # Ignore artifacts:
    tfgrid-stats
    ```

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  Configuration files:

  - `tfgrid_stats/.eslinttrc.js`

    ```js
    module.exports = {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      plugins: ["svelte3", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      overrides: [
        {
          files: ["*.svelte"],
          processor: "svelte3/svelte3",
        },
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: { "@typescript-eslint/no-explicit-any": "off" },
      settings: {
        "svelte3/typescript": true, // load TypeScript as peer dependency
      },
    };
    ```

  - `tfgrid_stats/.eslintignore`

    ```txt
    # /node_modules/* and /public/build/* in the project root are ignored by default

    # Ignore built files except build/index.js
    
    *.config.*
    *global.css
    ```
