import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import cow from "./Images/cow.png";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    paddingTop: 25,
  },
  img: {
    width: "500px",
    height: "500px",
  },
});

const Cow = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={cow} className={classes.img}></img>
      </div>
      <div className={classes.button}>
        <Button variant="outlined" color="secondary">
          التالي
        </Button>
      </div>
    </div>
  );
};
export default Cow;
