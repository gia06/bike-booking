import styled from "styled-components";

function Form() {
  return (
    <FormWrapper>
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
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
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
