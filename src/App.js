import React from "react";
import styled, { css } from "styled-components";
import "./App.css";
import Startpage from "./pages/Startpage";
const font = css`
  font-family: "SangSangShinb7";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.1/SangSangShinb7.woff")
    format("woff");
  font-weight: bold;
`;
const Body = styled.div`
  ${font}
  width: 60vh;
  display: inline-block;
  background-color: antiquewhite;
`;
const App = () => {
  return (
    <Body>
      <Startpage />
    </Body>
  );
};

export default App;
