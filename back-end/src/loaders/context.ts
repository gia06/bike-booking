import express from "express";
import { Models } from "../interfaces/general";
import { BikesService } from "../services/bike.service";
import { BikesRepository } from "../repository/bikes.repository";

export const loadContext = async (models: Models) => {
  const router = express.Router();
  const bikeRepository = new BikesRepository(models.bikeModel);

  return {
    router,
    repository: {
      bikeRepository: new BikesRepository(models.bikeModel),
    },
    services: {
      bikeService: new BikesService(bikeRepository),
    },
  };
};
