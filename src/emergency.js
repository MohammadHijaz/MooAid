import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cow from "./Images/emergencyCow.png";
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
  font: {
    display: "flex",
    alignSelf: "basline",
    color: "white",
    fontWeight: "bold",
    fontSize: "110%",
  },
  textdiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    width: "300px",
    fontSize: "15px",
    marginTop: "30px",
    marginBottom: "30px",
    backgroundColor: "#dc0b10",
    border: "5px solid #eeecda",
  },
}));

const Emergency = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={cow} alt="" className={classes.imgs} />
      </div>
      <div>
        <div className={classes.textdiv}>
          <p className={classes.font}> الشرطة : 100 </p>
        </div>
        <div className={classes.textdiv}>
          <p className={classes.font}> الإسعاف : 101</p>
        </div>
        <div className={classes.textdiv}>
          <p className={classes.font}> الدفاع المدني : 102</p>
        </div>
      </div>
    </div>
  );
};
export default Emergency;
