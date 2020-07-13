import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import hospital from "./Images/hospitalScorpion.png";
import ice from "./Images/iceScorpion.png";
import calm from "./Images/calmScorpion.png";
import pressure from "./Images/pressureScorpion.png";
import Cow from "./Images/cowScorpion.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  img: {
    marginTop: "30px",
    width: "280px",
    height: "300px",
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
    backgroundColor: "#c992c9",
    border: "5px solid #eeecda",
  },
}));
const Scorpion = () => {
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
              <img src={calm} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>احرص على تهدئة المصاب</p>
              </div>
            </div>
            <div>
              <img src={pressure} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  ان أمكن كن في وضعية بحيث تكون اللدغة تحت مستوى قلبك
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imggrid}>
            <div>
              <img src={ice} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  اغسل الجرح و برده بوضع كمادات الثلج
                </p>
              </div>
            </div>

            <div>
              <img src={hospital} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>توجه الى الطبيب حالاً</p>
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
                  backgroundColor: "#c992c9",
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
export default Scorpion;
