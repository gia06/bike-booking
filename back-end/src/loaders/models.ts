import { BikeModel } from "../models/bike.model";
import { Models } from "../interfaces/general";

export const loadModels = async () => {
  const models: Models = {
    bikeModel: BikeModel,
  };

  return models;
};
