import React from "react";
import Cow from "./Images/activitiesCow.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    marginTop: "25px",
  },
  imgs: {
    width: "400px",
    height: "500px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
const Activities = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={Cow} alt="" className={classes.imgs} />
      </div>
      <div className={classes.buttons}>
        <Link to="/quiz">
          <Button
            variant="outlined"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#fbbada",
              width: "200px",
              fontSize: "20px",
              height: "70px",
            }}
          >
            اختبر معلوماتك
          </Button>
        </Link>

        <Link to="/emergency">
          <Button
            variant="outlined"
            size="large"
            style={{
              color: "white",
              backgroundColor: "#fbbada",
              width: "200px",
              fontSize: "20px",
              height: "70px",
            }}
          >
            تعرف على ارقام الطوارئ
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Activities;
