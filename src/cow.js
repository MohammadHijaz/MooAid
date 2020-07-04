import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import cow from "./Images/cow.png";
import hiddenCow from "./Images/hiddenCow.png"
const Images = [cow, hiddenCow];
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    paddingTop: 25,
  },
  img: {
    width: "500px",
    height: "600px",
  },
  button: {
    alignSelf: "center",
    width: "190px"
  },
});
const Cow = () => {
  const classes = useStyles();
  const [show, setShow] = useState(0);
  const [text, setText] = useState("التالي")
  const [navigate, setnavigate] = useState(false);
  const handClick = () => {
    if (show < 1) {
      setShow(show + 1);
      console.log(show);
      if (show == 0) {
        setText("اذهب الى الصفحة الرئيسية");
        setnavigate(true)
      }
    }
  }
  return (
    <div className={classes.container}>
      <div>
        <img src={Images[show % 2]} className={classes.img}></img>
      </div>
      {navigate ? <a href="/home" className={classes.button}> <Button variant="outlined" size="large" style={{ color: "#e90916" }} onClick={handClick}>
        {text}
      </Button>
      </a>
        : <Button variant="outlined" size="large" style={{ color: "#e90916" }} onClick={handClick} className={classes.button}>
          {text}
        </Button>}
    </div >
  );
};
export default Cow;
