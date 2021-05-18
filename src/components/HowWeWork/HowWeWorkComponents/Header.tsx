import React from "react";
import styled from "styled-components";
import computerImage from "../../../images/27-inch-imac-2012-perspective.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <h1>How We Work</h1>
        <img src={computerImage} alt="Computer Screen" />
        <p>
          WE CREATE A PLATFORM AND STRATEGY SO YOU CAN FOCUS ON THE OPERATIONS
          OF YOUR BUSINESS
        </p>
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.section`
  padding-top: 150px;
  padding-bottom: 50px;
  background-color: #eee;
  display: flex;
  justify-content: center;
`;
const HeaderInnerWrapper = styled.div`
  width: 90%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 60px;
    line-height: 44px;
  }
  p {
    font-size: 25px;
    text-align: center;
    font-weight: 500;
  }
  img {
    width: 500px;
  }
`;
