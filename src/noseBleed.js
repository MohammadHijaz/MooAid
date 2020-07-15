import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import lean from "./Images/leanForward.png";
import pinch from "./Images/pinchNose.png";
import ice from "./Images/iceNosebleed.png";
import again from "./Images/again.png";
import Cow from "./Images/noseBleedCow.png";
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
    border: "11px solid #f1b6c8",
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
    backgroundColor: "#f1b6c8",
    border: "5px solid #eeecda",
  },
}));
const NoseBleed = () => {
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
              <img src={lean} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  انحني قليلاً للأمام و تجنب ميل الرأس للخلف أو الاستلقاء
                </p>
              </div>
            </div>
            <div>
              <img src={pinch} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  اضغط على الجزء الناعم من الانف لمدة خمس دقائق على الأقل
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imggrid}>
            <div>
              <img src={ice} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  يمكن وضع كمادات باردة او كيس ثلج على الأنف
                </p>
              </div>
            </div>
            <div>
              <img src={again} alt="" className={classes.img} />
              <div className={classes.textdiv}>
                <p className={classes.font2}>
                  في حال لم يتوقف النزيف لمدة لا تقل عن 30 دقيقة اذا لم يتوقف
                  توجه الى الطوارئ
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
                  backgroundColor: "#f1b6c8",
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
export default NoseBleed;
