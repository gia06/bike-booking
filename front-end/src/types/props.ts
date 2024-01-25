import { BikeData, BikeStats } from "./Bike";

export interface BikeComponentProps {
  bikes: BikeData;
  setBikes: React.Dispatch<React.SetStateAction<BikeData | undefined>>;
}

export interface FormComponentProps {
  bikeStats: BikeStats | null;
}

export interface StatisticsComponentProps extends FormComponentProps {}
