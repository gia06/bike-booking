import styled from "styled-components";
function Header() {
  return <HeaderWrapper>ADMIN.BIKE-BOOKING.COM</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.header`
  /* position: absolute; */
  width: 100%;
  height: 42px;
  background: #696969;
  padding: 4px 16px;
  color: #e8e8e8;
  font-family: "Saira Stencil One";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 350px) {
    font-size: 20px;
  }
`;
