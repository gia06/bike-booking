import { Application, Router, Request } from "express";
import { BikeModel } from "../models/bike.model";
import { BikesService } from "../services/bike.service";
import { BikesRepository } from "../repository/bikes.repository";

export interface Context {
  router: Router;
  repository: {
    bikeRepository: BikesRepository;
  };
  services: {
    bikeService: BikesService;
  };
}

export type RouterFactory = (context: Context) => Router;

export type Loader = (app: Application, context: Context) => void;

export type ExtendedRequest = Request & { id: string };

export interface Models {
  bikeModel: typeof BikeModel;
}

export interface User {
  userInputId: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
}

export type Status = "available" | "busy" | "unavailable";
