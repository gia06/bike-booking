import axios from "axios";
import { BikeBody, BikeData, BikeStatus } from "../types/Bike";
import { filterById } from "../utils/counters";

export const updateStatus = async (
  event: React.ChangeEvent<HTMLSelectElement>,
  id: string,
  setBikeStatus: React.Dispatch<React.SetStateAction<BikeStatus>>
) => {
  const status = event.target.value;
  try {
    const response = await axios.put(`http://localhost:3001/api/bikes/${id}`, {
      status,
    });
    setBikeStatus((prevState) => ({ ...prevState, [id]: status }));
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const removeBike = async (
  bikes: BikeData,
  setBikes: React.Dispatch<React.SetStateAction<BikeData | undefined>>,
  id: string
) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/api/bikes/${id}`
    );
    const filteredBikes = filterById(bikes, id);
    setBikes(filteredBikes);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const addBike = async (bike: BikeBody) => {
  try {
    await axios.post(`http://localhost:3001/api/bikes`, bike);
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};
