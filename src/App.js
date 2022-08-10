import React from "react";
import styled from "styled-components";
import Startpage from "./pages/Startpage";
import { Route, Routes } from "react-router-dom";
import Resultpage from "./pages/Resultpage";
const Font = styled.div`
  font-family: "SangSangShinb7";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.1/SangSangShinb7.woff")
    format("woff");
  font-weight: bold;
`;
const Body = styled.div`
  width: 60vh;
  display: inline-block;
  background-color: antiquewhite;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const App = () => {
  return (
    <Routes>
      <Body>
        <Font>
          <Route path="/" element={<Startpage />} />
          <Route path="/result" element={<Resultpage />} />
        </Font>
      </Body>
    </Routes>
  );
};

export default App;
