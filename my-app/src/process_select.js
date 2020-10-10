import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//스타일이 적용된 div를 가진 컴포넌트.
const BackGroundBlock = styled.span`
  width: 100%;
  height: 900px;
  background-color: #ffc107;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 40px;
`;

const TitleBlock = styled.span`
  width: 1000px;
  height: full;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

///////////////////////////////////////

const ButtonLine = styled.h1`
  display: 100%;
  margin-left: 0%;
  margin-right: 0%;
  font-family: "Nanum Gothic";
  font-weight: 200;
  color: white;
  padding-bottom: 0px;

  vertical-align: center;
`;

const ButtonBlock = styled.button`
  outline: none;
  border: none;

  border-radius: 10px;

  width: 27%;
  height: 90px;

  margin-bottom: 0%;
  margin-top: 0%;
  margin-left: 3%;
  margin-right: 3%;

  background-color: white;
  color: black;

  font-size: 10px;
  font-family: "Nanum Gothic";
  font-weight: 200;

  -webkit-box-shadow: 10px 10px 9px -9px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 10px 10px 9px -9px rgba(0, 0, 0, 0.05);
  box-shadow: 10px 10px 9px -9px rgba(0, 0, 0, 0.05);
`;

const TextBox = styled.h1`
  font-size: 10px;
  font-family: "Nanum Gothic";
  font-weight: 200;
  color: black;
  padding-bottom: 3px;
`;

const Divider = styled.div`
  border-bottom: 0px solid rgba(138, 138, 138, 0.5);
  margin-bottom: 60px;
`;

let beClicked = false;
let selected_name = "false";

class ProcessSelect extends React.Component {
  moveHref = (data) => {
    beClicked = true;
    selected_name = "true";

    console.log(data);

    this.props.history.push({
      pathname: "/" + data,
    });
  };

  render() {
    const { moveHref } = this;
    return (
      <BackGroundBlock>
        <TitleBlock>
          <span>어떤 방식의 협업을 진행하시나요?</span>
        </TitleBlock>
        <Divider></Divider>
        <ButtonLine>
          <ButtonBlock>
            <href to="/filter">
              <TextBox>필터링</TextBox>
              <TextBox>검색</TextBox>
            </href>
          </ButtonBlock>
          <ButtonBlock>
            <href to="/yesno">
              <TextBox>선택장애</TextBox>
              <TextBox>Yes or No</TextBox>
            </href>
          </ButtonBlock>
          <ButtonBlock>
            <href to="/rouletteList">
              <TextBox>돌려돌려</TextBox>
              <TextBox>돌림판</TextBox>
            </href>
          </ButtonBlock>
        </ButtonLine>
      </BackGroundBlock>
    );
  }
}
// <TitleBlock>
//           <span>enter your zoom code!</span>
//         </TitleBlock>
// <InputBlock>
//   <input
//     placeholder="테마를 입력하세요"
//     onClick={() => moveHref("dadada")}
//   ></input>
//   <button onClick={() => moveHref("dadada")}>Start!</button>
// </InputBlock>;
export default ProcessSelect;
