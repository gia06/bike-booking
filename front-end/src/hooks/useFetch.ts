import { useEffect, useState } from "react";
import { BikeData, BikeStats } from "../types/Bike";
import { countAverageCost, countStatus } from "../utils/counters";
import axios from "axios";

export const UseFetch = () => {
  const [bikes, setBikes] = useState<BikeData | null>(null);
  const [bikeStats, setBikeStats] = useState<BikeStats | null>(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/bikes").then((res): void => {
      setBikes(res.data);
    });
  }, []);

  useEffect(() => {
    const total = bikes ? bikes.length : 0;
    const available = countStatus(bikes, "available");
    const booked = countStatus(bikes, "busy");
    const averageCost = countAverageCost(bikes);

    setBikeStats({ total, available, booked, averageCost });
  }, [bikes]);

  return { bikes, setBikes, bikeStats };
};
