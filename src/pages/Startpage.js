import React from "react";
import styled, { css } from "styled-components";
import InputDate from "../components/InputDate";
import InputGender from "../components/InputGender";
import InputWeather from "../components/InputWeather";

const Title = styled.div`
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  font-size: 55px;
  margin-bottom: 0;
  font-style: normal;
  color: #d86a66;
`;
const Description = styled.div`
  font-size: 35px;
  margin: 0.3em;
  color: #d86a66;
`;
const Text = styled.div`
  font-size: 25px;
  font-weight: normal;
  margin: 0.3em;
`;
const buttonStyle = css`
  font-family: "SangSangShinb7";
  border-radius: 100px;
  width: 35vh;
  height: 6vh;
  margin: 0.6vh;
  font-size: 30px;
  cursor: pointer;
  padding: 1px 2px;
`;
const WhiteButton = styled.input`
  ${buttonStyle}
  background-color: white;
  border: 1px solid #d86a66;
  color: #d86a66;
  text-align: center;
`;
const PinkButton = styled.input`
  ${buttonStyle}
  background-color: #D86A66;
  border: 1px solid #d86a66;
  color: white;
  text-align: center;
`;
const Startpage = () => {
  return (
    <>
      <Title>
        <div>오늘,</div>
        <div>가장 행복한 날</div>
      </Title>
      <Description>힘든 하루 속 당신을 위한 응원일기!</Description>
      <Text>✽ 날짜와 성별, 날씨를 선택해주세요 ✽</Text>
      <br />
      <InputDate />
      <InputGender />
      <br />
      <InputWeather />
      <br />
      <form>
        <WhiteButton type="text" placeholder="이름을 입력하세요" id="name" />
        <br />
        <PinkButton type="button" value="응원하기" onclick="printName()" />
      </form>
    </>
  );
};

export default Startpage;
