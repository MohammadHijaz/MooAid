import React, { Component } from 'react'
import Questions from './Questions.jsx';
import Quiz from './Quiz.js'
import Button from "@material-ui/core/Button";
class RootComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            problem: Questions,
            answers: []

        }
    }

    render() {
        const newQuestion = this.state.problem.map(item => <Quiz
            key={item.id}
            firstQuestion={item.firstQuestion}
            firstAnswer={item.firstAnswer}
            isFirstAnswerSelected={item.IsFirstAnswerSelected}
            secondAnswer={item.secondAnswer}
            isSecondAnswerSelected={item.IsSecondAnswerSelected}
            thirdAnswer={item.thirdAnswer}
            isThirdAnswerSelected={item.IsThirdAnswerSelected}
            answer={item.answer}
            total={Questions.length}
        />
        )
        this.state.problem.map(item => this.setState({ answers: [...this.state.answers, item.answer] }))
        return (
            <div>
                {newQuestion}
            </div>

        )
    }
}

export default RootComponent