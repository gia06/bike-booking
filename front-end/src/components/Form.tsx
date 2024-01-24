import styled from "styled-components";

function Form() {
  return (
    <>
      <Input placeholder="name"></Input>
      <Input placeholder="type"></Input>
      <Input placeholder="color"></Input>
      <Input placeholder="wheel size"></Input>
      <Input placeholder="price"></Input>
      <Input placeholder="ID (slug): XXXXXXXXXX"></Input>
      <textarea placeholder="description"></textarea>
      <Button>submit</Button>
      <Button>clear</Button>
      <hr />
    </>
  );
}

export default Form;

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
