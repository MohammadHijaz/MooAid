import React from "react";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Button from "@material-ui/core/Button";
import cat from "./Images/cat.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginTop: "25px",
  },
  img: {
    width: "400px",
    height: "400px",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    height: "500px",
    width: "500px",
    border: "11px solid #feb562",
    borderRadius: "360px",
  },
});
const FirstInjury = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <img src={cat} alt="" className={classes.img} />
      </div>

      <Link to="/injury">
        <Button
          variant="outlined"
          size="large"
          style={{
            color: "white",
            backgroundColor: "#fbbada",
            width: "200px",
            fontSize: "20px",
            height: "50px",
          }}
        >
          التالي
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Link>
    </div>
  );
};
export default FirstInjury;
