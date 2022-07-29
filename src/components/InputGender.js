import React from "react";
import styled, { css } from "styled-components";

const GenderImg = styled.div`
  display: flex;
  justify-content: center;
  height: 15vh;
`;
const GenderBox = styled.label`
  width: 15vh;
  height: 15vh;
`;
const GirlImg = styled.div`
  content: url(img/girl.PNG);
  width: 14vh;
`;
const BoyImg = styled.div`
  content: url(img/boy.PNG);
  width: 14vh;
`;
const Input = styled.input``;

const InputGender = () => {
  return (
    <GenderImg>
      <GenderBox>
        <Input type="checkbox" className="gender" id="girl">
          <GirlImg />
        </Input>
      </GenderBox>
      <GenderBox>
        <Input type="checkbox" className="gender" id="boy">
          <BoyImg />
        </Input>
      </GenderBox>
    </GenderImg>
  );
};

export default InputGender;
