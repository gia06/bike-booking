import styled from "styled-components";
import cross from "../assets/cross.svg";
import triangle from "../assets/triangle.svg";
import { BikeComponentProps } from "../types/props";
import axios from "axios";
import { useEffect, useState } from "react";

function BikeList({ bikes }: BikeComponentProps) {
  interface BikeStatus {
    [id: string]: string;
  }
  const [bikeStatus, setBikeStatus] = useState<BikeStatus>({});

  useEffect(() => {
    bikes?.forEach((bike) => {
      setBikeStatus((prevState) => ({
        ...prevState,
        [bike.userInputId]: bike.status,
      }));
    });
  }, [bikes]);

  const handleStatus = (status: string) => {
    switch (status) {
      case "available":
        return "#6FCF97";
      case "busy":
        return "#F2994A";
      case "unavailable":
        return "#EB5757";
    }
  };

  const updateStatus = async (
    event: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const status = event.target.value;
    try {
      const response = await axios.put(
        `http://localhost:3001/api/bikes/${id}`,
        { status }
      );
      setBikeStatus((prevState) => ({ ...prevState, [id]: status }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BikesContainer>
      {bikes?.map((bike) => (
        <BikeItem
          key={bike._id}
          $borderColor={handleStatus(bikeStatus[bike.userInputId])}
        >
          <BikeInfo>
            <p>
              <Name>{bike.name}</Name> - type ({bike.color})
            </p>
            <Id>id: {bike.userInputId}</Id>
            <Status>
              status:
              <StatusValue onChange={(e) => updateStatus(e, bike.userInputId)}>
                <option
                  value="available"
                  selected={bike.status === "available"}
                >
                  Available
                </option>
                <option value="busy" selected={bike.status === "busy"}>
                  Busy
                </option>
                <option
                  value="unavailable"
                  selected={bike.status === "unavailable"}
                >
                  Unavailable
                </option>
              </StatusValue>
            </Status>
          </BikeInfo>

          <BikePrice>
            <img src={cross} />
            <p>{+bike.price.toFixed(2)} UAH/HR.</p>
          </BikePrice>
        </BikeItem>
      ))}
    </BikesContainer>
  );
}

export default BikeList;

const BikesContainer = styled.ul`
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

const BikeItem = styled.li<{ $borderColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 83px;
  padding: 12px 12px 12px 18px;
  border-radius: 10px;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  opacity: ${({ $borderColor }) => ($borderColor === "#EB5757" ? 0.5 : 1)};

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

const StatusValue = styled.select`
  text-transform: capitalize;
  margin-left: 18px;
`;
