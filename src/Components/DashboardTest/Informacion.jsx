import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  infoContainer:{
    width: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    //border:"solid red 3px"
  }
}));

const Informacion = () => {
  const classes = useStyles();

  return(
    <div className={classes.infoContainer}>
        <h1>Informacion</h1>
      </div>
  ) 
};

export default Informacion;