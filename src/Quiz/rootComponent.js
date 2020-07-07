import React, { Component } from 'react'
import Questions from './Questions.jsx';
import Quiz from './Quiz.js'
class RootComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: Questions.length,
            score: 0,
        }
    }
    render() {
        const newQuestions = Questions.map(item => <Quiz
            id={item.id}
            firstQuestion={item.firstQuestion}
            firstAnswer={item.firstAnswer}
            secondAnswer={item.secondAnswer}
            thirdAnswer={item.thirdAnswer}
            answer={item.answer}
            total={this.state.total}
            img={item.img}
            updateScore={() => {
                this.setState({ score: this.state.score + 1 })
            }}
        />
        )
        return (
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                {newQuestions}
                <h1 style={{ position: "fixed", alignSelf: "flex-start", marginTop: "3em" }}>المجموع : {this.state.score}</h1>
            </div >

        )
    }
}

export default RootComponent