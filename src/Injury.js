import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import cleanTheWound from "./Images/cleanTheWound.png";
import coverThewound from "./Images/coverTheWound.png";
import washYourHands from "./Images/washYourHands.png";
import stopTheBleeding from "./Images/stopTheBleeding.png";
import Cow from "./Images/injuriesCow.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  img: {
    marginTop: "30px",
    width: "280px",
    height: "300px",
  },
  font: {
    fontSize: "150%",
    color: "black",
  },
  font2: {
    display: "flex",
    alignSelf: "basline",
    color: "white",
    fontWeight: "bold",
    fontSize: "110%",
  },
  pardiv: {
    width: "900px",
    border: "5px solid #b1d9e7",
    backgroundColor: "#d8edf3",
  },
  div: {
    width: "900px",
    display: "flex",
    justifyContent: "center",
    border: "11px solid #c992c9",
    borderRadius: "360px",
    alignSelf: "center"
  },

  Agrid: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  imggrid: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "baseline",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    backgroundColor: "#11b6e5",
    border: "5px solid #eeecda",
  },
}));
const Injury = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
      <div className={classes.div}>
        <img src={Cow} style={{ width: "50%", height: "auto" }} alt="" />
      </div>
      <Grid item container className={classes.Agrid}>
        <div
          style={{
            height: "20px",
            color: "#eeecda",
          }}
        >
          <hr />
        </div>
        <div>
          <div className={classes.imggrid}>
            <div style={{ marginLeft: "10em" }}>
              <img src={washYourHands} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>اغسل يديك جيداً</p>
              </div>
            </div>
            <div>
              <img src={stopTheBleeding} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  اضغط على الجرح باستخدام قطعة قماش نظيفة لايقاف النزيف
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imggrid}>
            <div>
              <img src={cleanTheWound} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>قم بتنظيف و تعقيم الجرح</p>
              </div>
            </div>

            <div>
              <img src={coverThewound} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  قم بتغطية الجرح و استبدل الضمادة كل فترة
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link to="/end">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{
                  color: "white",
                  backgroundColor: "#11b6e5",
                  width: "200px",
                  fontSize: "20px",
                  height: "50px",
                }}
              >
                <DoneIcon />
                تمت قراءته
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </div>
  );
};
export default Injury;
