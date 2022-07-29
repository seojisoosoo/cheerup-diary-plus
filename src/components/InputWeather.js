import React from "react";
import styled from "styled-components";
const Img = styled.img`
  width: 15vh;
`;

const InputWeather = () => {
  return (
    <>
      <Img src="img/sunny-uncheck.png" alt="#" />
      <Img src="img/cloudy-uncheck.png" alt="#" />
      <Img src="img/rain-uncheck.png" alt="#" />
      <Img src="img/snow-uncheck.png" alt="#" />
    </>
  );
};

export default InputWeather;
