import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import boy from './boy.jpg';
import baby from './kid.jpeg';
import dump from './dump.jpg';
import money from './money.jpeg';
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  img: {
    width: "500px",
    height: "500px"
  }


});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div>
          <h1>Why you should wear a mask</h1>
          <img src={boy} className={classes.img}></img>
        </div>

        <div>
          <h1>Why you should annoy your baby</h1>
          <img src={baby} className={classes.img}></img>
        </div>
      </div>
      <div className={classes.column}>
        <div>
          <h1>How to know if you're being awkward</h1>
          <img src={dump} className={classes.img}></img>
        </div>
        <div>
          <h1>How to make money </h1>
          <img src={money} className={classes.img}></img>

        </div>
      </div>
    </div>
  )
}