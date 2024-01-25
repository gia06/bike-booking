import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <label>Developer:</label> Gia Shamugia
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 42px;
  background: #696969;
  color: #ffffff;
  padding: 10px;
  font-size: 20px;

  label {
    color: #cbcaca;
    margin-right: 10px;
  }
`;
