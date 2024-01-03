import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema(
  {
    userInputId: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    wheelSize: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const BikeModel = mongoose.model("Bike", BikeSchema);
