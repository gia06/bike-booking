import styled from "styled-components";
import Statistics from "./Statistics";
import { FormComponentProps } from "../types/props";
import Form from "./Form";

function DataForm({ bikeStats }: FormComponentProps) {
  return (
    <DataContainer>
      <Form />
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
`;
