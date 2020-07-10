import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import goodJob from "./Images/goodJob.png";
import background from './Images/background.png'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        marginTop: "25px",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    img: {
        width: "500px",
        height: "600px",
    },
    button: {
        alignSelf: "center",
        width: "190px",
        color: "#e90916"

    },
});
const End = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <img src={goodJob} className={classes.img}></img>
            </div>
            <Link to="./home">
                <Button variant="outlined" size="large" className={classes.button}>
                    اذهب الى الصفحة الرئيسية
                </Button>
            </Link>
        </div>
    );
};
export default End;
