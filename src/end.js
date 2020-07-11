import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import goodJob from "./Images/goodJob.png";
import background from "./Images/background.png";
import { Link } from "react-router-dom";
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
    // backgroundImage: `url(${background})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  img: {
    width: "400px",
    height: "500px",
  },
  button: {
    alignSelf: "center",
    width: "190px",
    color: "#e30510",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    height: "600px",
    width: "600px",
    border: "11px solid #e30510",
    borderRadius: "360px",
  },
});
const End = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
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
