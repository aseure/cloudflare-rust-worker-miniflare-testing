This repository is a minimal reproducible project showing that Rust Cloudflare
Worker cannot be tested programmatically through Miniflare out-of-the-box.

My first commit is the result of generating the initial codebase using the
officially documented command:

```
npx wrangler generate cloudflare-rust-worker-miniflare-testing https://github.com/cloudflare/workers-sdk/templates/experimental/worker-rust
```

The second commit contains my changes to setup an Ava test with a Miniflare
instance.

## Steps to reproduce

```
npm install
npm run test
```

## Problem

```
  VMScriptRunnerError [ERR_MODULE_RULE] (VMScriptRunnerError) {
    cause: undefined,
    code: 'ERR_MODULE_RULE',
    message: `Unable to resolve "build/worker/shim.mjs" dependency "./index.wasm": no matching module rules.␊
    If you're trying to import an npm package, you'll need to bundle your Worker first.`,
  }
```

## Expected

A working test which invokes the worker through the generated code.
