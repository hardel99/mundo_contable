import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper";
import Add from "../../images/signup-img-blue.jpg"
import AddHorizontal from "../img/paisaje.jpg"

const useStyles = makeStyles((theme) => ({

  paper: {
    display: "flex",
    alignItems: "start",
    marginTop: "70px",
    padding: theme.spacing(3),
    width: "100vw",
    //overflow: "hidden",
    //border: "solid #ff3333 2px",

    [theme.breakpoints.up('xl')]: {
      margin: "70px 400px 0 400px",
      
    },

  },

  gridParent:{
    //Sborder: "solid #02d9ff 2px",
    width: "100%",
  },

  gridContainer: {
    //border: "solid #3c48b9 2px",
  },

  gridItem: {
    //border: "solid #3c8 2px",
    overflow: "hidden",
  },

  addimg: {
    width: "100%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down('md')]: {
    },

  },

  addContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "200px",
    height: "200px",
    marginTop: "10px",
    

    //border: "solid #b93c3c 2px",

    [theme.breakpoints.down('md')]: {
    },

  },

  addContainerH: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "728px",
    height: "90px",
    
    [theme.breakpoints.down('md')]: {
      width: "600px",
    },

    [theme.breakpoints.down('sm')]: {
      width: "400px",
      height: "50px",
    },
  },

}));

const Informacion = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
        <Grid className={classes.gridParent} container spacing={2} >

          <Grid className={classes.gridContainer} item md={8} sm={12}>

            <Grid container >

              <Grid item xs={12} className={classes.gridItem}>
                <Paper>
                  <Box width="100%">
                    <div className={classes.addContainerH}>
                      <img src={AddHorizontal} alt="addimg" />
                    </div>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} className={classes.gridItem} >
                <Paper>
                  <Box width="100%" p={1.5} >
                    <h1>MUNDO MENSAJES</h1>
                    <p>Envió de mensajes de texto (SMS) hacia celulares de El Salvador: Tigo, Claro, Digicel, movistar,
                      primero debes escribir el numero  de teléfono, luego escribes el contenido del mensajito, escribes
                      tu nombre y finalizas haciendo clic en el botón  enviar.
                    </p>
                  </Box>
                </Paper>
              </Grid>


                <Grid item xs={12} className={classes.gridItem}>
                  <Paper>
                    <Box width="100%" height={500} p={1.5} >
                      Stepper
                    </Box>
                  </Paper>
                </Grid>


            </Grid>
          </Grid>

          <Grid item className={classes.gridContainer} xs={12} md={4} sm={12} >
            <Grid container >

              <Grid className={classes.gridItem}  item xs={6} md={12} sm={4} >
                  <Box width="100%"  >
                    <div className={classes.addContainer}>
                      <img src={Add} alt="addimg" className={classes.addimg} />
                    </div>
                  </Box>
              </Grid>

              <Grid className={classes.gridItem} item xs={6} md={12} sm={4}>
                  <Box width="100%"  >
                    <div className={classes.addContainer}>
                      <img src={Add} alt="addimg" className={classes.addimg} />
                    </div>
                  </Box>
              </Grid>

              <Grid className={classes.gridItem} item xs={6} md={12} sm={4}>
                  <Box width="100%"  >
                    <div className={classes.addContainer}>
                      <img src={Add} alt="addimg" className={classes.addimg} />
                    </div>
                  </Box>
              </Grid>

            </Grid>


          </Grid>

        </Grid>
      </div>
    </>
  );
};

export default Informacion;