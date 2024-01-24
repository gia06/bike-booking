import { BikeData, BikeStatus } from "../types/Bike";

export const countStatus = (bikes: BikeData, status: BikeStatus) => {
  return bikes ? bikes.filter((bike) => bike.status === status).length : 0;
};

export const countAverageCost = (bikes: BikeData) => {
  const total = bikes
    ? bikes.reduce((total, bike) => total + bike.price, 0) / bikes.length
    : 0;

  return +total.toFixed(2);
};
