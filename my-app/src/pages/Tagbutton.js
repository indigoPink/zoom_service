import React, { Component } from "react";
import "./TagButton.css";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   TagTextStyle: {
//     fontSize: 18,
//     marginTop: 17
//   }
// });

class TagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      colleges: [
        "#인문대학",
        "#사회과학대학",
        "#사범대학",
        "#자연과학대학",
        "#생명공학대학",
        "#공과대학",
        "#창의ICT공과대학",
        "#소프트웨어대학",
        "#경영경제대학",
        "#의과대학",
        "#약학대학",
        "#적십자간호대학",
        "#예술대학",
        "#예술공학대학",
        "#체육대학",
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

    return <div style={TagTextStyle}>{collegeList}</div>;
  }
}

export default TagButton;
