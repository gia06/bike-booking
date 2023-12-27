import styled from "styled-components";
import cross from "../assets/cross.svg";

function Bike() {
  return (
    <BikeList>
      <BikeItem>
        <BikeInfo>
          <p>name - type (color)</p>
          <p>id: xxxxxxxxxxxxx</p>
          <p>
            status: <label>available</label>
            <img />
          </p>
        </BikeInfo>

        <BikePrice>
          <img src={cross} />
          <p>12.00 UAH/HR.</p>
        </BikePrice>
      </BikeItem>
    </BikeList>
  );
}

export default Bike;

const BikeList = styled.ul`
  position: absolute;
  top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 50%;
  height: calc(100vh - 84px);
  padding: 12px 9px 0px 12px;
  /* background-color: red; */
  border-right: 1px solid #c4c4c4;
`;

const BikeItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 83px;
  padding: 12px 12px 12px 18px;
  border-radius: 10px;
  border: 2px solid #6fcf97; //!TODO Should depend on items status
`;

const Name = styled.h3`
  text-transform: uppercase;
`;

const BikeInfo = styled.div`
  height: 100%;
  text-transform: uppercase;
`;

const BikePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height: 100%;
  color: #000;

  img {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  p {
    font-size: 24px;
    line-height: 20px;
  }
`;

const Id = styled.p``;

const Status = styled.p``;
