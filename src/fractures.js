import React from "react";
import brokenarm from "./Images/brokenarm.png";
import fixedarm from "./Images/fixedarm.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    height: "100%",
    width: "100%",
    marginTop: "25px"
  },
  img: {
    width: "200px",
    height: "270px",
  },
});
const Fractures = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={brokenarm} className={classes.img}></img>
        <img src={fixedarm} style={{ width: "190px", height: "250px" }}></img>
      </div>
    </div>
  );
};

export default Fractures;
