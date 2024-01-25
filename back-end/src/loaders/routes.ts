import express from "express";
import { makeBikesRouter } from "../routes/bikes";
import { Context } from "../interfaces/general";
import { errorHandler } from "../middlewares/errorHandler";

export const loadRoutes = async (app: express.Router, context: Context) => {
  app.use("/api/bikes", makeBikesRouter(context));

  app.use(errorHandler);
};
