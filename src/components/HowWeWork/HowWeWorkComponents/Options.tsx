import React from "react";
import styled from "styled-components";
import onlineImage from "../../../images/buy-icon.svg";
import website from "../../../images/website-design.svg";
import eCommerce from "../../../images/ecommerce.svg";

const Options = () => {
  return (
    <OptionsWrapper>
      <OptionsInnerWrapper>
        <h2 className="handwritten-header">We've got your back</h2>
        <h2 className="options-header">Options</h2>
        <ColumnWrapper>
          <Column>
            <img src={onlineImage} alt="shopping bag" />
            <p>Full website redesign and development</p>
          </Column>
          <Column>
            <img src={eCommerce} alt="But button" />
            <p>
              Marketing services including content creation and social media
              strategy
            </p>
          </Column>
          <Column>
            <img src={website} alt="computer screen" />
            <p>eCommerce store development</p>
          </Column>
        </ColumnWrapper>
        <a href="https://forms.gle/ZaZhfMSeV9QxgnNcA">
          <Button>EVOLVE WITH US</Button>
        </a>
      </OptionsInnerWrapper>
    </OptionsWrapper>
  );
};

export default Options;

const OptionsWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const OptionsInnerWrapper = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .handwritten-header {
    margin: 0;
    margin-top: 80px;
    font-family: "Quentin", sans-serif;
    color: #b09a7f;
    font-size: 42px;
    line-height: 42px;
    text-align: center;
  }
  .options-header {
    color: white;
    font-size: 38px;
    margin: 0;
    font-family: "Work Sans", sans-serif;
    font-weight: 900px;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 44px;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
  padding: 5px;
  img {
    width: 100px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 32px;
    line-height: 40px;
    font-family: "Work Sans", sans-serif;
  }
`;

const Button = styled.button`
  margin-bottom: 20px;
  margin-top: 50px;
  font-size: 20px;
  line-height: 32px;
  color: #fff;
  background-color: #b09a7f;
  padding-top: 12px;
  padding: 9px 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  font-family: "Work Sans", sans-serif;
  width: 220px;
`;
