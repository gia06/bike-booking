import styled from "styled-components";
import { StatisticsComponentProps } from "../types/props";

function Statistics({ bikeStats }: StatisticsComponentProps) {
  return (
    <StatsWrapper>
      <h2>statistics</h2>
      <p>total bikes: {bikeStats?.total}</p>
      <p>available bikes: {bikeStats?.available}</p>
      <p>booked bikes: {bikeStats?.booked}</p>
      <p>average bike cost: {bikeStats?.averageCost} UAH/hr.</p>
    </StatsWrapper>
  );
}

export default Statistics;

const StatsWrapper = styled.div`
  h2 {
    text-transform: uppercase;
  }

  p {
    text-transform: capitalize;
    font-size: 14px;
  }
`;
