import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import head from "./Images/head.jpg";
import cut from "./Images/cut.jpg";
import nosebleed from "./Images/nosebleed.jpg";
import bee from "./Images/boy.png";
import broken from "./Images/broken.png";
import toxic from "./Images/toxic.png";
import { Link } from "react-router-dom";
import intro from "./Images/intro.png";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    marginTop: "25px",
  },
  columnLeft: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "space-around",
    marginRight: "10em"
  },
  columnRight: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "space-around",
    marginLeft: "10em"

  },
  img: {
    width: "200px",
    height: "200px",
  },
  text: {
    fontSize: "25px",
    marginTop: "30px",
    marginBottom: "30px",
    backgroundColor: "#f5587b",
    borderRadius: "360px",
    border: "5px solid #f5587b",
  },
  outline: {
    border: "11px solid #eeecda",
    height: "300px",
    width: "300px",
  },
  cow: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.columnRight}>
        <div className={classes.outline}>
          <img src={head} className={classes.img}></img>
          <h1
            style={{
              fontSize: "25px",
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#05dfd7",
              borderRadius: "360px",
              border: "5px solid #05dfd7",
              color: "white",
            }}
          >
            اصابات الرأس
          </h1>
        </div>
        <Link to="/firstinjury">
          <div className={classes.outline}>
            <img src={cut} className={classes.img}></img>
            <h1
              style={{
                fontSize: "25px",
                marginTop: "30px",
                marginBottom: "30px",
                backgroundColor: "#f5587b",
                borderRadius: "360px",
                border: "5px solid #f5587b",
                color: "white",
              }}
            >
              الجروح
            </h1>
          </div>
        </Link>
        <div className={classes.outline}>
          <img src={toxic} className={classes.img}></img>
          <h1
            style={{
              fontSize: "25px",
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#5ede91",
              borderRadius: "360px",
              border: "5px solid #5ede91",
              color: "white",
            }}
          >
            ابتلاع المواد الكيماوية
          </h1>
        </div>
      </div>
      <div className={classes.cow}>
        <img src={intro} style={{ width: "350px", height: "400px" }}></img>
      </div>
      <div className={classes.columnLeft}>
        <div className={classes.outline}>
          <img src={nosebleed} className={classes.img}></img>
          <h1
            style={{
              fontSize: "25px",
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#e41749",
              borderRadius: "360px",
              border: "5px solid #e41749",
              color: "white",
            }}
          >
            نزيف الأنف و الرعاف
          </h1>
        </div>
        <Link to="/bites">
          <div className={classes.outline}>
            <img src={bee} className={classes.img}></img>
            <h1
              style={{
                fontSize: "25px",
                marginTop: "30px",
                marginBottom: "30px",
                backgroundColor: "#8566aa",
                borderRadius: "360px",
                border: "5px solid #8566aa",
                color: "white",
              }}
            >
              اللدغات و اللسعات
            </h1>
          </div>
        </Link>
        <div className={classes.outline}>
          <img src={broken} className={classes.img}></img>
          <h1
            style={{
              fontSize: "25px",
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#fa1616",
              borderRadius: "360px",
              border: "5px solid #fa1616",
              color: "white",
            }}
          >
            الكسور
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
