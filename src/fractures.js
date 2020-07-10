import React from "react";
import brokenarm from "./Images/brokenarm.png";
import fixedarm from "./Images/fixedarm.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    marginTop: "25px"
  },
  img: {
    width: "500px",
    height: "500px",
  },
});
const Fractures = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
      }}>
        <img src={brokenarm} className={classes.img}></img>
        <img src={fixedarm} style={{ width: "500px", height: "500px" }}></img>
      </div>
      <div>
        sssss
      </div>
    </div>
  );
};

export default Fractures;
