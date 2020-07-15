import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import cow from "./Images/cow.png";
import hiddenCow from "./Images/hiddenCow.png"
import { Link } from 'react-router-dom'
import useSound from 'use-sound';
import cowSound1 from './Sounds/Cow1.mp4'
import cowSound2 from './Sounds/Cow2.mp4'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
const Images = [cow, hiddenCow];
const Sounds = [cowSound1, cowSound2];
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginTop: "25px"
  },
  img: {
    width: "500px",
    height: "600px",
  },
  button: {
    alignSelf: "center",
    width: "190px",
    color: "#e90916"
  },
  soundButton: {
    alignSelf: "center",
    width: "45px",
    color: "#e90916",
  },

});
const Cow = () => {
  const classes = useStyles();
  const [show, setShow] = useState(0);
  const [play, { stop }] = useSound(Sounds[show % Sounds.length], { volume: 0.5 });
  const [text, setText] = useState("التالي");
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundButtonIcon, setsoundButtonIcon] = useState(<PlayArrowIcon />);
  const [navigate, setnavigate] = useState(false);
  const handleClick = () => {
    stop();
    setsoundButtonIcon(<PlayArrowIcon />)
    setIsSoundPlaying(false);
    if (show < 1) {
      setShow(show + 1);
      if (show == 0) {
        setText("اذهب الى الصفحة الرئيسية");
        setnavigate(true)
      }
    }
  }
  const handleSoundClick = () => {
    setIsSoundPlaying(!isSoundPlaying);
    if (!isSoundPlaying) {
      play();
      setsoundButtonIcon(<StopIcon />)
    }
    else {
      stop();
      setsoundButtonIcon(<PlayArrowIcon />)
    }
  }
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={Images[show % Images.length]} className={classes.img}></img>
        <Button class={classes.soundButton} onClick={handleSoundClick}>{soundButtonIcon}</Button>
      </div>
      {navigate ? <Link to="/home" className={classes.button}> <Button variant="outlined" size="large" style={{ color: "#e90916" }} onClick={handleClick}>
        {text}
      </Button>
      </Link>
        : <Button variant="outlined" size="large" style={{ color: "#e90916" }} onClick={handleClick} className={classes.button}>
          {text}
        </Button>}
    </div >
  );
};
export default Cow;
