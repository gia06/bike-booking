import { BikeData, BikeStats } from "./Bike";

export interface BikeComponentProps {
  bikes: BikeData;
}

export interface FormComponentProps {
  bikeStats: BikeStats | null;
}

export interface StatisticsComponentProps extends FormComponentProps {}
