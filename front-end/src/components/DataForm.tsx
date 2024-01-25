import styled from "styled-components";
import Statistics from "./Statistics";
import { FormComponentProps } from "../types/props";
import InputList from "./InputList";
import { useForm } from "react-hook-form";
import { BikeBody } from "../types/Bike";
import { addBike } from "../services/bike.service";

function DataForm({ bikeStats }: FormComponentProps) {
  const { handleSubmit, register, reset } = useForm<BikeBody>();
  // const onSubmit = (data: BikeBody) => {
  //   console.log(data);
  // };

  return (
    <DataContainer onSubmit={handleSubmit(addBike)}>
      <InputList register={register} reset={reset} />
      <Statistics bikeStats={bikeStats} />
    </DataContainer>
  );
}

export default DataForm;

const DataContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 252px;
  padding: 10px;
  gap: 10px;

  textarea {
    width: 100%;
    height: 75px;
    padding: 5px 16px;
    background: #e8e8e8;
    border: none;
    border-radius: 5px;
    resize: none;
    outline: none;

    &::-webkit-input-placeholder {
      text-transform: capitalize;
    }
  }

  hr {
    width: 100%;
    margin-top: 6px;
    background: #c4c4c4;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
