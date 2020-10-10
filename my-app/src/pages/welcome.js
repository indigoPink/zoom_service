import React, { useState, useEffect } from "react";
import styled from "styled-components";

//스타일이 적용된 div를 가진 컴포넌트.
const BackGroundBlock = styled.span`
  width: 100%;
  height: 900px;
  background-color: #ffc107;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 100px;
`;

const InputBlock = styled.span`
  width: 100%;
  height: full;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const TitleBlock = styled.span`
  width: 1000px;
  height: full;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

let beClicked = false;
let selected_name = "false";

class Welcome extends React.Component {
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
          <span>welcome!</span>
        </TitleBlock>
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
export default Welcome;
