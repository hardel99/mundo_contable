import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
     paper: {
      marginTop:"70px",
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      //border:"solid #b93c3c 2px",
      width: "100%",
    },

    grid_container:{
      border: "5px solid rgb(111,41,97)",
  display: "grid,"
    },
    paperc:{
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginTop:"20px",
      
    },
    
}));

function GridItem({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paperc}>ITEM</Paper>
    </Grid>
  );
}

const Informacion = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
      <div>
      <h3> Responsive Material UI Grid </h3>
      <Grid container spacing={1}>
        <GridItem classes={classes} />
        <GridItem classes={classes} />
        <GridItem classes={classes} />
        <GridItem classes={classes} />
        <GridItem classes={classes} />
        <GridItem classes={classes} />
      </Grid>
    </div>

      </div>
    </>
  );
};

export default Informacion;