import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import head from "./Images/head.jpg";
import cut from "./Images/cut.jpg";
import nosebleed from "./Images/nosebleed.jpg";
import bee from "./Images/boy.png";
import broken from "./Images/broken.png";
import toxic from "./Images/toxic.png";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    marginTop: "25px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "space-around",
  },
  img: {
    width: "200px",
    height: "200px",
  },
  text: {
    fontSize: "25px",
    marginTop: "30px",
    marginBottom: "30px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div>
          <img src={head} className={classes.img}></img>
          <h1 className={classes.text}>اصابات الرأس</h1>
        </div>
        <div>
          <img src={cut} className={classes.img}></img>
          <h1 className={classes.text}>الجروح</h1>
        </div>
        <div>
          <img src={toxic} className={classes.img}></img>
          <h1 className={classes.text}>ابتلاع المواد الكيماوية</h1>
        </div>
      </div>
      <div className={classes.column}>
        <div>
          <img src={nosebleed} className={classes.img}></img>
          <h1 className={classes.text}>نزيف الأنف و الرعاف</h1>
        </div>
        <div>
          <img src={bee} className={classes.img}></img>
          <h1 className={classes.text}>اللدغات و اللسعات </h1>
        </div>
        <div>
          <img src={broken} className={classes.img}></img>
          <h1 className={classes.text}> الكسور </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
