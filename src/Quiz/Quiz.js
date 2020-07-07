import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
    bigContainer: {
        display: "flex",
        flexDirection: "row",
    },
    containerColumn: {
        display: "flex",
        marginTop: "3em",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",

    },
    imagesContainer: {
        display: "flex",
        width: "100%",
        marginTop: "3em"


    },
    normalContatiner: {
        marginTop: "1.5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: "3em",
        marginRight: "3em",
        backgroundColor: "green",
        display: "flex",
        alignSelf: "flex-end"
    },
    disabledbutton: {
        marginTop: "3em",
        marginRight: "3em",
        backgroundColor: "white",
        display: "flex",
        alignSelf: "flex-end"
    },
    correctAnswerContainer: {
        marginTop: "1.5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        border: "solid green",
        textAlign: "center"
    },
    normalAnswer: {

    },
    boxedAnswer: {
        marginLeft: "1.1em",
        marginTop: "1em",
        marginBottom: "1em",
        marginRight: "1em",
    },
    wrongAnswerContainer: {
        marginTop: "1.5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        border: "solid red",
        textAlign: "center"
    }




});
const Quiz = (props) => {
    const classes = useStyles();
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
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

                props.updateScore();
            }
        }
        else if (props.answer === 2) {
            if (checked2) {
                props.updateScore();

            }
        }
        else if (props.answer === 3) {
            if (checked3) {
                props.updateScore();
            }
        }
        setButtonDisabled(true);
    }
    return (
        <div className={classes.bigContainer}>
            <div className={classes.imagesContainer}>
                <img src={props.img} style={{ height: "300px", width: "300px", marginLeft: "auto" }}></img>
            </div>
            <div className={classes.containerColumn}>
                <h1>السؤال : {props.id} / {props.total}</h1>
                <h1>{props.firstQuestion}</h1>
                {buttonDisabled && checked1 && props.answer !== 1 ? <div className={classes.wrongAnswerContainer}><h4 className={classes.boxedAnswer}>{props.firstAnswer}</h4>
                    <input type="checkbox" checked={checked1} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange1} /></div>
                    : <div className={buttonDisabled && props.answer === 1 ? classes.correctAnswerContainer : classes.normalContatiner}>
                        <h4 className={buttonDisabled && props.answer === 1 ? classes.boxedAnswer : classes.normalAnswer}>{props.firstAnswer}</h4>
                        <input type="checkbox" checked={checked1} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange1} />
                    </div>}
                {buttonDisabled && checked2 && props.answer !== 2 ? <div className={classes.wrongAnswerContainer}><h4 className={classes.boxedAnswer}>{props.secondAnswer}</h4>
                    <input type="checkbox" checked={checked2} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange2} /></div>
                    : <div className={buttonDisabled && props.answer === 2 ? classes.correctAnswerContainer : classes.normalContatiner}>
                        <h4 className={buttonDisabled && props.answer === 2 ? classes.boxedAnswer : classes.normalAnswer}>{props.secondAnswer}</h4>
                        <input type="checkbox" checked={checked2} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange2} />
                    </div>}
                {buttonDisabled && checked3 && props.answer !== 3 ? <div className={classes.wrongAnswerContainer}><h4 className={classes.boxedAnswer}>{props.thirdAnswer}</h4>
                    <input type="checkbox" checked={checked3} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange3} /></div>
                    : <div className={buttonDisabled && props.answer === 3 ? classes.correctAnswerContainer : classes.normalContatiner}>
                        <h4 className={buttonDisabled && props.answer === 3 ? classes.boxedAnswer : classes.normalAnswer}>{props.thirdAnswer}</h4>
                        <input type="checkbox" checked={checked3} style={{ marginLeft: "1em", marginRight: "0.5em", transform: "scale(1.5)" }} onChange={handleChange3} />
                    </div>}
                <Button className={buttonDisabled ? classes.disabledbutton : classes.button} disabled={buttonDisabled} onClick={handleClick}>تحقق من الاجابة</Button>
            </div>
        </div >

    )
}

export default Quiz