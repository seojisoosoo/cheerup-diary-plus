import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
  width: 40vh;
  border-width: 1px 0px 0px 0px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Date = styled.input`
  font-family: "SangSangShinb7";
  color: black;
  font-size: 15px;
  width: 40vh;
  height: 5vh;
  text-align: center;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  margin: 0rm;
`;

const InputDate = () => {
  return (
    <>
      <Hr />
      <Date type="date" class="date" id="date" />
      <Hr />
    </>
  );
};

export default InputDate;
