# Feed My Sheep (FMS) — Media & Ministry website

React + TypeScript + Vite single-page application.

## Configuration

### WhatsApp enquiry phone number

The app reads the enquiry number from `window.APP_CONFIG.enquiryPhoneNumber`, which is loaded from
`public/config.js` before the application bundle:

```js
window.APP_CONFIG = {
  enquiryPhoneNumber: '919876543210', // international number, digits only, with country code
};
```

- `public/config.js` is public, non-secret configuration and is **not tracked by git** (see
  `public/config.js.example`). The deployment environment generates/updates it from its own
  mechanism (e.g. a CI/CD step writing the file from an env var). Because `config.js` is a static
  sibling of the compiled bundle, it can be replaced on the deployed site (e.g. overwriting
  `dist/config.js`) without a source-code change or a frontend rebuild.
- For local development, when no runtime config file is present, the app falls back to
  `VITE_ENQUIRY_PHONE_NUMBER` in `.env` (see `.env.example`).
- The app validates the number and logs a clear error if configuration is missing or invalid; it
  never falls back to a hardcoded number.

This number is displayed publicly to users. Never put API keys, passwords, tokens, or other
secrets in `config.js` or any frontend runtime configuration.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
