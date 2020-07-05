import React, { Component, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
    container: {
        display: "flex",
        marginTop: "2em",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-around",
        marginRight: "1em"
    },
    miniContatiner: {
        marginTop: "1.5em",
        display: "flex",
        flexDirection: "row",
    },
    button: {
        marginTop: "3em",
        marginRight: "3em",
        backgroundColor: "green",
        display: "flex",
        alignSelf: "flex-end"
    }
});
const Quiz = (props) => {
    const classes = useStyles();
    const [checked1, setChecked1] = useState(props.isFirstAnswerSelected);
    const [checked2, setChecked2] = useState(props.isSecondAnswerChecked);
    const [checked3, setChecked3] = useState(props.isThirdAnswerChecked);
    const [score, setScore] = useState(0);
    const handleChange1 = () => {
        setChecked1(!checked1);
        setChecked2(false);
        setChecked3(false);
    }
    const handleChange2 = () => {
        setChecked2(!checked2);
        setChecked1(false);
        setChecked3(false);
    }
    const handleChange3 = () => {
        setChecked3(!checked3);
        setChecked2(false);
        setChecked1(false);
    }
    const handleClick = () => {
        if (props.answer === 1) {
            if (checked1) {
                alert("YES")
            }
            else {
                alert("NO")
            }
        }
        else if (props.answer === 2) {
            if (checked2) {
                alert("YES")
            }
            else {
                alert("NO")
            }
        }
        else if (props.answer === 3) {
            if (checked3) {
                alert("YES")
            }
            else {
                alert("NO")
            }
        }

    }
    return (
        <div className={classes.container}>
            <h1>{props.firstQuestion}</h1>
            <div className={classes.miniContatiner}>
                <input type="checkbox" checked={checked1} onChange={handleChange1} />
                <p style={{ marginLeft: "1.1em" }}>{props.firstAnswer}</p>
            </div>
            <div className={classes.miniContatiner}>
                <input type="checkbox" checked={checked2} onChange={handleChange2} />
                <p style={{ marginLeft: "1.1em" }}>{props.secondAnswer}</p>
            </div>
            <div className={classes.miniContatiner}>
                <input type="checkbox" checked={checked3} onChange={handleChange3} />
                <p style={{ marginLeft: "1.1em" }}>{props.thirdAnswer}</p>
            </div>

        </div>

    )
}

export default Quiz