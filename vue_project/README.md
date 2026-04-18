# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Local Development
Run these commands from the repository root (the folder that contains both `package.json` and `vue_project/`):

```bash
npm install
npm run dev
```

# Important: Build vs Publish
- `npm run build` (root): builds Vue into `vue_project/dist` only.
- `npm run publish` (root): builds Vue and copies the generated files into the repository root (`index.html` + `assets/`) so deployment picks up your changes.

If you only run `npm run build`, the website may not update after deployment.

# Update Website Content And Deploy
After editing files in `vue_project/src`, run these commands from repository root:

```bash
npm run publish
git add .
git commit -m "Update website content"
git push origin main
```

After deployment finishes, hard refresh your browser to avoid cached assets:
- macOS: `Cmd + Shift + R`

# What To Check If Changes Do Not Appear
1. Confirm the latest commit includes updated root files (`index.html` and `assets/*`).
2. Confirm you used `npm run publish` (not only `npm run build`).
3. Wait for deployment to finish, then hard refresh.

# Setup On A New Machine
Install Node.js and npm first. Then run:

```bash
brew install node
```