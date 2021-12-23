import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  plansContainer:{
    width: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    //border:"solid red 3px"
  }
}));


const Plans = () => {
  const classes = useStyles();

  return(
    <div className={classes.plansContainer}>
      <h1>Planes contenedor</h1>
    </div>
  ) 
};

export default Plans;
