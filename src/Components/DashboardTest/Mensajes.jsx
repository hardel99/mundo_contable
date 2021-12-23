import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  smsContainer:{
    width: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    //border:"solid red 3px"
  }
}));

const Mensajes = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.smsContainer}>
        <h1>Mensajes Tool</h1>
      </div>
    </>
  );
};

export default Mensajes;