import styled from "styled-components";
import { InputListProps } from "../types/props";

function InputList({ register, reset }: InputListProps) {
  return (
    <>
      <Input
        placeholder="name"
        {...register("name", { required: true, minLength: 5 })}
      ></Input>
      <Input
        placeholder="type"
        {...register("type", { required: true, minLength: 5 })}
      ></Input>
      <Input
        placeholder="color"
        {...register("color", { required: true })}
      ></Input>
      <Input
        type="number"
        min={1}
        max={100}
        placeholder="wheel size"
        {...register("wheelSize", { required: true })}
      ></Input>
      <Input
        placeholder="price"
        type="number"
        min={0}
        step={0.01}
        {...register("price", { required: true })}
      ></Input>
      <Input
        placeholder="ID (slug): XXXXXXXXXX"
        {...register("userInputId", { required: true })}
      ></Input>
      <textarea
        placeholder="description"
        {...register("description", { required: true, minLength: 5 })}
      ></textarea>
      <Button type="submit">submit</Button>
      <Button onClick={() => reset()}>clear</Button>
      <hr />
    </>
  );
}

export default InputList;

const Input = styled.input`
  width: 49%;
  height: 29px;
  border-radius: 5px;
  background: #e8e8e8;
  outline: none;
  border: none;
  padding: 6px 16px;
  font-size: 12px;

  &::-webkit-input-placeholder {
    text-transform: capitalize;
  }
`;

const Button = styled.button`
  width: 49%;
  height: 24px;
  border-radius: 5px;
  background: #696969;
  border: none;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
`;
