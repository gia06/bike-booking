import { CustomValidator } from "express-validator";
import { BikesService } from "../../services/bike.service";

export class CustomValidators {
  bikeService: BikesService;

  constructor(bikeService: BikesService) {
    this.bikeService = bikeService;
  }

  findById(): CustomValidator {
    return async (userInputId: string, { req }) => {
      const bike = await this.bikeService.findOneByUserInputId(userInputId);

      if (!bike) {
        console.error(`User with provided id doesn't exists`);
        throw new Error(`User with provided id doesn't exists`);
      }
      req.res.locals.bike = bike;
    };
  }

  addBike(): CustomValidator {
    return async (userInputId: string, { req }) => {
      const bike = await this.bikeService.findOneByUserInputId(userInputId);

      if (bike) {
        console.error(`User with provided id already exists`);
        throw new Error(`User with provided id already exists`);
      }
    };
  }

  updateStatus(): CustomValidator {
    return async (userInputId: string, { req }) => {
      const bike = await this.bikeService.findOneByUserInputId(userInputId);

      if (!bike) {
        console.error(`User with provided id doesn't exists`);
        throw new Error(`User with provided id doesn't exists`);
      }
      req.res.locals.bike = bike;
    };
  }
}
