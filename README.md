# Villa Casa Monte

Marketing site for Villa Casa Monte — a luxury holiday villa in Loulé, Algarve.
Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui.

## Development

The dev environment is provided via a Nix flake (Deno + tooling):

```sh
nix develop
```

Or, if you have Deno installed directly, skip the shell.

Install dependencies and start the dev server:

```sh
deno install
deno task dev
```

The site runs at http://localhost:8080.

## Tasks

| Task | Command |
| --- | --- |
| Dev server | `deno task dev` |
| Production build | `deno task build` |
| Preview build | `deno task preview` |
| Lint | `deno task lint` |
| Unit tests | `deno task test` |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys `dist/` to GitHub Pages. The site is served at
[casamonte.de](https://casamonte.de) (custom domain via `public/CNAME`).
