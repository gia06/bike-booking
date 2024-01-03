import styled from "styled-components";
import cross from "../assets/cross.svg";
import triangle from "../assets/triangle.svg";

function Bike() {
  return (
    <BikeList>
      <BikeItem>
        <BikeInfo>
          <p>
            <Name>name</Name> - type (color)
          </p>
          <Id>id: xxxxxxxxxxxxx</Id>
          <Status>
            status: <StatusValue>available</StatusValue>
            <img src={triangle} />
            <select>
              <option value="available">Available</option>
              <option value="busy">Busy</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </Status>
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
  top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 12px;
  width: 50%;
  height: calc(100vh - 84px);
  padding: 12px 9px 0px 12px;
  border-right: 1px solid #c4c4c4;
  overflow: auto;
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

  p {
    text-transform: uppercase;
    color: #333;
  }
`;

const Name = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
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

const Id = styled.p`
  text-transform: uppercase;
  color: #717171;
  font-size: 8px;
`;

const Status = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    font-family: Saira;
    /* color: #717171; */
    font-size: 14px;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-position: right;
    border: none;
    outline: none;
    width: 90px;
  }

  img {
    margin-left: 3px;
  }
`;

const StatusValue = styled.label`
  text-transform: capitalize;
  margin-left: 18px;
`;
