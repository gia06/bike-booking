import cors from "cors";
import { Loader } from "../interfaces/general";
import requestID from "express-request-id";
import express from "express";

export const loadMiddlewares: Loader = (app) => {
  app.use(requestID());
  app.use(cors());
  app.use(express.json());
};
