import React from "react";
import styled, { keyframes } from "styled-components";

const Succes = ({ text }) => {
  return (
    <Container>
      <AnimatedText>{text}</AnimatedText>
    </Container>
  );
};
export default Succes;

const moveAnimaion = keyframes`
 0% { opacity: .1; margin-right: -150vw; }
 100% { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AnimatedText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${moveAnimaion};
  animation-duration: 1s;
`;
