import React from "react";
import styled from "styled-components";
import InputDate from "../components/InputDate";

const Title = styled.div`
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  font-size: 35px;
  margin-bottom: 0;
  font-style: normal;
  color: #d86a66;
`;
const Description = styled.div`
  font-size: 17px;
  margin: 0.3em;
  color: #d86a66;
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  margin: 0.3em;
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
      <InputDate />
    </>
  );
};

export default Startpage;
