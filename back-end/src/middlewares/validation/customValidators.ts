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

  // registerEmail(): CustomValidator {
  //   return async (email: string, { req }) => {
  //     const user = await this.userService.findByEmail(email);

  //     if (user) {
  //       logger.error(`User with provided email already exists`);
  //       throw new Error(`User with provided email already exists`);
  //     }
  //     return true;
  //   };
  // }

  // registerAvatar(): CustomValidator {
  //   return async (avatar: string, { req }) => {
  //     if (!req.file) {
  //       throw new Error('avatar is required field');
  //     }
  //   };
  // }

  // loginEmail(): CustomValidator {
  //   return async (email: string, { req }) => {
  //     const user = await this.userService.findByEmail(email);
  //     if (!user) {
  //       throw new Error(`user with provided email doesn't exist`);
  //     }
  //     req.res.locals.user = user;
  //   };
  // }

  // loginPassword(): CustomValidator {
  //   return async (password, { req }) => {
  //     const { user } = req.res.locals;

  //     if (!user) {
  //       return false;
  //     }

  //     const comparisonResult = await this.userService.comparePassword(password, user.password);

  //     if (!comparisonResult) {
  //       throw new Error('Incorrect password');
  //     }
  //   };
  // }
}
