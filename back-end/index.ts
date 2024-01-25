import { loadApp } from "./src/loaders/app";

(async () => {
  const app = await loadApp();
  app.listen(3001, () =>
    console.info(`Application is running on http://localhost:3001`)
  );
})();
