import { ValidationChain, check, param } from "express-validator";
import { BikesService } from "../../services/bike.service";
import { CustomValidators } from "./customValidators";

interface Chain {
  findById: ValidationChain[];
  addBike: ValidationChain[];
  updateStatus: ValidationChain[];
}

export const validationChain = (bikeService: BikesService): Chain => {
  const customValidators = new CustomValidators(bikeService);

  return {
    findById: [param("id").custom(customValidators.findById())],
    addBike: [
      check("userInputId")
        .notEmpty()
        .withMessage("userInputId is required field")
        .custom(customValidators.addBike()),
      check("name")
        .notEmpty()
        .withMessage("name is required field")
        .isLength({ min: 5, max: 40 })
        .withMessage(
          "length for name field should be minimum 5 and not more than 40"
        ),
      check("type")
        .notEmpty()
        .withMessage("type is required field")
        .isLength({ min: 5, max: 40 })
        .withMessage(
          "length for type field should be minimum 5 and not more than 40"
        ),
      check("color")
        .notEmpty()
        .withMessage("color is required field")
        .isLength({ min: 1, max: 40 })
        .withMessage(
          "length for color field should be minimum 5 and not more than 40"
        ),
      check("wheelSize")
        .notEmpty()
        .withMessage("name is required field")
        .isLength({ min: 1, max: 2 })
        .withMessage(
          "length for wheelSize field should be minimum 1 and not more than 2"
        ),
      check("price").notEmpty().withMessage("price is required field"),
      check("description")
        .notEmpty()
        .withMessage("description is required field")
        .isLength({ min: 5, max: 128 })
        .withMessage(
          "length for description field should be minimum 5 and not more than 40"
        ),
    ],
    updateStatus: [
      param("id").custom(customValidators.updateStatus()),
      check("status")
        .notEmpty()
        .withMessage("status is required field")
        .isIn(["available", "busy", "unavailable"])
        .withMessage("Invalid status"),
    ],
  };
};
