export type BikeStatus = "available" | "busy" | "unavailable";

export interface BikeInterface {
  _id: string;
  userInputId: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  status: BikeStatus;
}

export type BikeData = BikeInterface[] | null;

export interface BikeStats {
  total: number;
  available: number;
  booked: number;
  averageCost: number;
}
