# TypeScript

Personal sandbox for learning and experimenting with TypeScript.

## Getting started

This repo is intentionally lightweight. If you want to turn it into a runnable TypeScript project from scratch, follow the steps below.

### Prerequisites

- Node.js (LTS recommended)
- npm (or pnpm/yarn)

### Initialize the project

```bash
npm init -y
npm i -D typescript ts-node @types/node
npx tsc --init
```

### Recommended project structure

You can keep things simple with:

- `src/` for TypeScript source
- `dist/` for compiled JavaScript output (generated)

### Add a first file

Create `src/index.ts`:

```ts
const message: string = "Hello, TypeScript";
console.log(message);
```

### Run TypeScript directly (no build step)

Use `ts-node` for quick experiments:

```bash
npx ts-node src/index.ts
```

### Build and run compiled JavaScript

If you prefer a build step, compile with `tsc` and run with Node:

```bash
npx tsc
node dist/index.js
```

If `dist/` isn’t being emitted yet, check `tsconfig.json` (see the configuration section below).

## Configuration (tsconfig.json)

`tsconfig.json` controls how TypeScript type-checks and emits code.

Common settings you may want to enable or tweak:

- `rootDir`: where TypeScript looks for source files (commonly `./src`)
- `outDir`: where compiled JavaScript goes (commonly `./dist`)
- `strict`: turns on stricter type-checking (recommended for learning good habits)
- `target`: JavaScript language level to emit (e.g. `ES2020`)
- `module`: module system to emit (e.g. `CommonJS` for Node, `ESNext` for modern bundlers)
- `moduleResolution`: how imports are resolved (often `NodeNext` for modern Node ESM)

Example snippet (adjust to your needs):

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

## Suggested npm scripts

If you want convenient commands, add scripts to `package.json`:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
}
```

Then you can run:

```bash
npm run typecheck
npm run dev
npm run build
npm run start
```

## Notes

- Intended for TypeScript examples, small utilities, and experiments.
- No framework assumptions (Node/React/etc.) until added to the repo.
