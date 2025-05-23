# tsdown-applicative-monorepo
An example applicative monorepo powered by tsdown

## Development

- Install dependencies
```bash
npm install
```

- Build the packages
```bash
npm run build -w @mymonorepo/my-package
npm run build -w @mymonorepo/my-ui-package
```

- Run the application
  - In a first terminal, run the Hono server
  ```bash
  npm run dev -w @mymonorepo/my-server
  ```
  - In a second terminal, run the Vue app
  ```bash
  npm run dev -w @mymonorepo/my-app
  ```
