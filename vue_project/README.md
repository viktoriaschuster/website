# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Run Dev server locally
Run the following commands at the root of the repository:
``` Bash
npm install
```

``` Bash
npm run dev
```

In order to build the website run:
``` Bash
npm run build
```
The built static HTML can then be found in the dist/ folder.

``` Bash
cd .. # into website root
cp -r vue_project/dist/* .
```

Commit and push the changes to deploy the updated website.
``` Bash
git add .
git commit -m "Update website content and rebuild"
git push origin main
```

# When setting up on a new machine 
Make sure to install Node.js and npm first. Then run the following command at the root of the repository to install dependencies:
``` Bash
brew install node
```