import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade, Bounce } from "react-awesome-reveal";
import axios from "axios";

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

axios
  .post("/user", {
    room: "193fj2094jfj",
    user: "julie",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

let beClicked = false;
let selected_name = "false";

class IdeationSetting extends React.Component {
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
      <>
        <TopBlock></TopBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>What is the topic of today's</span>
            </TitleBlock>
          </Bounce>
        </BackGroundBlock>
        <BackGroundBlock>
          <Bounce>
            <TitleBlock>
              <span>collaboration?</span>
            </TitleBlock>
          </Bounce>
          <Divider></Divider>
        </BackGroundBlock>
        <BackGroundBlock></BackGroundBlock>
        <TopBlock></TopBlock>
      </>
    );
  }
}

export default IdeationSetting;
