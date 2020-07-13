import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import intro from "./Images/cowbite.png";
import bee from "./Images/bee.png";
import spider from "./Images/spider.png";
import snake from "./Images/snake.png";
import scorpion from "./Images/scorpion.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  img: {
    width: "350px",
    height: "auto",
  },
  Pdiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse ",
  },
  ButtonsDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  imgs: {
    width: "200px",
    height: "200px",
  },
  div: {
    display: "flex",
    flexDirection: "row-reverse ",
    alignItems: "center",
    marginTop: "100px",
  },
}));

const Bites = () => {
  const classes = useStyles();
  return (
    <div className={classes.Pdiv}>
      <div className={classes.ButtonsDiv}>
        <div className={classes.div}>
          <img src={snake} alt="" className={classes.imgs} />
          <Link to="/snake">
            <Button
              variant="outlined"
              size="large"
              style={{
                color: "white",
                backgroundColor: "#ff819f",
                width: "200px",
                fontSize: "20px",
                height: "50px",
              }}
            >
              لدغة الثعبان
            </Button>
          </Link>
        </div>
        <div className={classes.div}>
          <img src={bee} alt="" className={classes.imgs} />
          <Button
            variant="outlined"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#fac90c",
              width: "200px",
              fontSize: "20px",
              height: "50px",
            }}
          >
            لسعة النحلة
          </Button>
        </div>
      </div>
      <div>
        <img src={intro} alt="" className={classes.img} />
      </div>
      <div>
        <div className={classes.div}>
          <img src={scorpion} alt="" className={classes.imgs} />
          <Link to="/scorpion">
            <Button
              variant="outlined"
              size="large"
              style={{
                color: "white",
                backgroundColor: "#a86cd5",
                width: "200px",
                fontSize: "20px",
                height: "50px",
              }}
            >
              لسعة العقرب
            </Button>
          </Link>
        </div>
        <div className={classes.div}>
          <img src={spider} alt="" className={classes.imgs} />
          <Button
            variant="outlined"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#1a77b9",
              width: "200px",
              fontSize: "20px",
              height: "50px",
            }}
          >
            لدغة العنكبوت
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Bites;
