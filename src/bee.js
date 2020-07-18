import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import clean from "./Images/washBee.png";
import Itch from "./Images/Itch.png";
import Ice from "./Images/IceBee.png";
import sting from "./Images/stingBee.png";
import Cow from "./Images/cowBee.png";
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
    border: "11px solid #f9d56e",
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
    backgroundColor: "#f9d56e",
    border: "5px solid #eeecda",
  },
}));
const Bee = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
      <Link to="/emergency" style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.div}>
          <img src={Cow} style={{ width: "50%", height: "auto" }} alt="" />
        </div>
      </Link>
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
              <img src={sting} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  قم بازالة المتبقي من اللسعة مع تجنب الضغط علي المنطقة المصابة
                </p>
              </div>
            </div>
            <div>
              <img src={clean} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  اغسل موضع اللسعة بالماء و الصابون
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imggrid}>
            <div>
              <img src={Ice} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>ضع الثلج للحد من التورم</p>
              </div>
            </div>

            <div>
              <img src={Itch} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  تجنب حك موضع اللسعة لان ذلك يزيد التورم
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
                  backgroundColor: "#f9d56e",
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
export default Bee;
