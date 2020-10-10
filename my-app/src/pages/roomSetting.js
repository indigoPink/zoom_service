import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade, Bounce } from "react-awesome-reveal";
import axios from "axios";

export async function setRoom(
  process,
  code,
  platform,
  name,
  whole_minutes,
  intro_minutes,
  speech_minutes,
  rest_minutes
) {
  const response = await axios.post(
    `apiurl`,
    {
      process: "ideation",
      code: "zoom-room-code",
      platform: "zoom",
      name: "name-of-the-meeting",
      whole_minutes: 90,
      intro_minutes: 9,
      speech_minutes: 13,
      rest_minutes: 4,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
}

//스타일이 적용된 div를 가진 컴포넌트.
const BackGroundBlock = styled.span`
  width: 100%;
  height: flex;
  background-color: #ffc107;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 40px;
`;

const TopBlock = styled.span`
  width: 100%;
  height: 300px;
  background-color: #ffc107;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 40px;
`;

const TitleBlock = styled.span`
  width: 1000px;
  font-weight: 800;
  height: full;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 40px;
`;

///////////////////////////////////////

const ButtonLine = styled.h1`
  display: 100%;
  margin-left: 0%;
  margin-right: 0%;
  width: 100%;
  font-family: "Nanum Gothic";
  font-weight: 200;
  color: white;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  vertical-align: center;
`;

const ButtonBlock = styled.button`
  outline: none;
  border: none;

  border-radius: 10px;

  width: 200px;
  height: 200px;

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
  font-size: 20px;
  font-family: "Nanum Gothic";
  font-weight: 500;
  color: black;
  padding-bottom: 3px;
`;

const Divider = styled.div`
  border-bottom: 0px solid rgba(138, 138, 138, 0.5);
  margin-bottom: 60px;
`;

// var params = new URLSearchParams();
// console.log(params);
// axios
//   .post("/user", params)
//   .then((Resopnse) => {})
//   .catch((ex) => {
//     console.log(ex);
//   });

// const data = {
//   key: value
// }

// const config = {
//   header: {
//     Authorization: `Bearer ${[token]}`
//   }
// }

// aioxs.post('apiUri', data, config)
// .then(res => {})
// .catch(err => {console.log(err);});

axios
  .post("/user", {
    process: "ideation",
    code: "zoom-room-code",
    platform: "zoom",
    name: "name-of-the-meeting",
    whole_minutes: 90,
    intro_minutes: 9,
    speech_minutes: 13,
    rest_minutes: 4,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

let beClicked = false;
let selected_name = "false";

class RoomSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: [
        false,
        false,
        false,
        false,
        false,
      ],
      colleges: [
        "1h",
        "2h",
        "3h",
        "4h",
        "5h",
      ],
    };
    this.changeColor.bind(this);
    // 클래스 형 함수는 위에 추가해줘야함!
  }

  changeColor(i) {
    console.log(i);
    this.setState({
      bool: this.state.bool.map((item, index) => (index !== i ? item : !item)),
    });
  }
  render() {
    const { colleges } = this.state;
    const collegeList = colleges.map((collage, i) => (
      <button
        className={`roundButton yHover ${this.state.bool[i] ? "skyblue" : ""}`}
        key={collage}
        onClick={(e) => this.changeColor(i)}
        style={{ height: 35, flex: 1 }}
      >
        <div style={TagTextStyle}>{collage}</div>
      </button>
    ));

    // 왜 버튼이 잘 안눌리나 했더니 누르는 함수가 글자 영역만 해당 되어서 그러는겨
    // 그래서 div에서 버튼으로 onCLick 옮겼음

    var container = {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    };

    var TagTextStyle = {
      fontSize: 30,
      flex: 1,
    };

    return (
      <>
        <TopBlock></TopBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>Time Setting / Management</span>
            </TitleBlock>
          </Bounce>
        </BackGroundBlock>
        <BackGroundBlock>
          <div style={TagTextStyle}>{collegeList}</div>
        </BackGroundBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>Self introduction</span>
            </TitleBlock>
          </Bounce>
          <Divider></Divider>
        </BackGroundBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>Ice breaking</span>
            </TitleBlock>
          </Bounce>
        </BackGroundBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>Idea Pitching</span>
            </TitleBlock>
          </Bounce>
        </BackGroundBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>Break Time</span>
            </TitleBlock>
          </Bounce>
        </BackGroundBlock>
        <TopBlock></TopBlock>
      </>
    );
  }
}
export default RoomSetting;
