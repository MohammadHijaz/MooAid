import React, { Component } from "react";
import Questions from "./Questions.jsx";
import Quiz from "./Quiz.js";
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
shuffle(Questions);
let newQuestions = [];
class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: Questions.length,
      score: 0,
    };
  }

  Push = () => {
    for (let i = 0; i < 5; i++) {
      newQuestions.push(
        <Quiz
          id={i + 1}
          firstQuestion={Questions[i].firstQuestion}
          firstAnswer={Questions[i].firstAnswer}
          secondAnswer={Questions[i].secondAnswer}
          thirdAnswer={Questions[i].thirdAnswer}
          answer={Questions[i].answer}
          total={5}
          img={Questions[i].img}
          updateScore={() => {
            this.setState({ score: this.state.score + 1 });
          }}
        />
      );
    }
  };
  componentWillMount() {
    this.Push();
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        {newQuestions}
        <h1
          style={{
            border: "7px solid #b1d9e7",
            position: "fixed",
            alignSelf: "flex-start",
            marginTop: "3em",
          }}
        >
          المجموع : {this.state.score}
        </h1>
      </div>
    );
  }
}

export default RootComponent;
