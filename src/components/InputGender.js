import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 15vh;
  margin: 2vh;
`;
const InputGender = () => {
  return (
    <>
      <Img src="img/girl.png" alt="#" />
      <Img src="img/boy.png" alt="#" />
    </>
  );
};

export default InputGender;
