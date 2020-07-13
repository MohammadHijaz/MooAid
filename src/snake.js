import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import clean from "./Images/cleanSnake.png";
import heart from "./Images/heartSnake.png";
import run from "./Images/runSnake.png";
import ring from "./Images/ringSnake.png";
import Cow from "./Images/cowSnake.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  img: {
    marginTop: "30px",
    width: "280px",
    height: "300px",
  },

  font: {
    fontSize: "110%",
    color: "white",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "30px",
    backgroundColor: "#93ca6d",
    border: "5px solid #eeecda",
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
    border: "11px solid #93ca6d",
    borderRadius: "360px",
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
    backgroundColor: "#93ca6d",
    border: "5px solid #eeecda",
  },
}));
const Snake = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <Grid item container className={classes.Agrid}>
        <Link to="/emergency">
          <div className={classes.div}>
            <img src={Cow} style={{ width: "50%", height: "auto" }} alt="" />
          </div>
        </Link>

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
              <img src={run} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  ابتعد عن الثعبان و حاول البقاء هادئاً قدر الامكان لتساعد على
                  ابطاء انتشار السم
                </p>
              </div>
            </div>
            <div>
              <img src={ring} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  أزل اية مجوهرات او ملابس ضيقة عن المنطقة قبل أن تبدأ بالانتفاخ
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imggrid}>
            <div>
              <img src={heart} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  ان أمكن كن في وضعية بحيث تكون اللدغة تحت مستوى قلبك
                </p>
              </div>
            </div>

            <div>
              <img src={clean} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  نظف الجرح بالماء و الصابون و قم بتغطيته بضمادة نظيفة و جافة
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
                  backgroundColor: "#93ca6d",
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
export default Snake;
