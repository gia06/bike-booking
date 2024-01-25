import { UseFormRegister, UseFormReset } from "react-hook-form";
import { BikeBody, BikeData, BikeStats } from "./Bike";

export interface BikeComponentProps {
  bikes: BikeData;
  setBikes: React.Dispatch<React.SetStateAction<BikeData | undefined>>;
}

export interface FormComponentProps {
  bikeStats: BikeStats | null;
}

export interface StatisticsComponentProps extends FormComponentProps {}

export interface InputListProps {
  register: UseFormRegister<BikeBody>;
  reset: UseFormReset<BikeBody>;
}
