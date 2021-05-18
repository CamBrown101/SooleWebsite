import React from "react";
import styled from "styled-components";
import Header from "./HowWeWorkComponents/Header";
import Options from "./HowWeWorkComponents/Options";
import Footer from "../Footer/Footer";

const HowWeWork = () => {
  return (
    <HowWeWorkWrapper>
      <Header />
      <Options />
      <Footer />
    </HowWeWorkWrapper>
  );
};
export default HowWeWork;

const HowWeWorkWrapper = styled.main``;
