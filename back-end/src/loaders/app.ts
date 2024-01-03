import * as dotenv from "dotenv";
import express from "express";
import { loadRoutes } from "./routes";
import { loadContext } from "./context";
import { loadMiddlewares } from "./middlewares";
import { loadMongoose } from "./mongoose";
import { loadModels } from "./models";

export const loadApp = async () => {
  dotenv.config();

  const app = express();

  await loadMongoose();
  const models = await loadModels();
  const context = await loadContext(models);

  loadMiddlewares(app, context);
  loadRoutes(app, context);
  return app;
};
