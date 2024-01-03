import styled from "styled-components";

function Statistics() {
  return (
    <StatsWrapper>
      <h2>statistics</h2>
      <p>total bikes: Number</p>
      <p>available bikes: Number</p>
      <p>booked bikes: Number</p>
      <p>average bike cost: Number UAH/hr.</p>
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
