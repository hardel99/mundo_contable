import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountrySelect from "./ToolComponents/CountrySelect";
import InputPhone from "./ToolComponents/InputPhone";
import TextArea from "./ToolComponents/TextArea";
import AdComponent from "./ToolComponents/AdComponent";
//-------------------------------------
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Add from "../../images/signup-img-blue.jpg"
import AddHorizontal from "../img/paisaje.jpg"


const useStyles = makeStyles(theme => ({
  smsPage: {

    display: "flex",
    alignItems: "start",
    marginTop: "70px",
    padding: theme.spacing(3),
    //overflow: "hidden",
   //border: "solid #ff3333 2px",

    [theme.breakpoints.up('xl')]: {
      margin: "70px 400px 0 400px",
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: "60px",
      padding: theme.spacing(0),
    },

  },

  stepperbox: {
    background: "#F6F6FB",
    borderRadius: "10px",

    [theme.breakpoints.down("xs")]: {
      width: "350px",
    },

  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),

    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(0),
      fontSize: "0.8rem",
    },

  },

  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  
  resetContainer: {
    padding: theme.spacing(3),
  },

  //*************************************************** */

  gridParent: {
    //border: "solid #02d9ff 2px",
    width: "100%",

    //***********************
    '& h1': {
      marginBottom: theme.spacing(2),

      [theme.breakpoints.up("xl")]: {
        fontSize: "3.5rem",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },

    },
    '& p': {

      [theme.breakpoints.up("xl")]: {
        marginBottom: theme.spacing(4),
        fontSize: "1.5rem",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
        //width: "320px",
        marginBottom: theme.spacing(0),
      },

    },

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

//getSteps contain the Step titles
function getSteps() {

  return [
    <b>Seleccionar código postal.</b>,
    <b>Digitar numero telefonico</b>,
    <b>Escribir mensaje</b>
  ];
}

//getStepContent contain the sms components 
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <CountrySelect />
        </>
      );
    case 1:
      return (
        <>
          <InputPhone>

          </InputPhone>
        </>
      ); case 2:
      return (
        <>
          <TextArea></TextArea>
        </>
      ); default:
      return 'Unknown step';
  }
}

const Mensajes = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className={classes.smsPage}>

        <Grid className={classes.gridParent} container spacing={2} >

          <Grid className={classes.gridContainer} item md={8} sm={12}>

            <Grid container >

              <Grid item xs={12} className={classes.gridItem}>
                  <Box width="100%">
                    <div className={classes.addContainerH}>
                      <img src={AddHorizontal} alt="addimg" />
                    </div>
                  </Box>
              </Grid>

              <Grid item xs={12} className={classes.gridItem} >
                  <Box width="100%" p={1.5} >
                    <h1>MUNDO MENSAJES</h1>
                    <p>Envió de mensajes de texto (SMS) hacia celulares de El Salvador: Tigo, Claro, Digicel, movistar,
                      primero debes escribir el numero  de teléfono, luego escribes el contenido del mensajito, escribes
                      tu nombre y finalizas haciendo clic en el botón  enviar.
                    </p>
                  </Box>
              </Grid>


              <Grid item xs={12} className={classes.gridItem}>
                  <Box width="100%"  p={1.5} >
                    <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepperbox}>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel >{label}</StepLabel>
                          <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                              <div>
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                  className={classes.button}
                                >
                                  Regresar
                                </Button>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleNext}
                                  className={classes.button}
                                >
                                  {activeStep === steps.length - 1 ? 'Enviar' : 'Continuar'}
                                </Button>
                              </div>
                            </div>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                    {activeStep === steps.length && (
                      <Paper square elevation={0}
                        className={classes.resetContainer}>
                        <Typography> (っ▀¯▀)つ ¡Su mensaje ha sido enviado con éxito! </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                          Volver
                        </Button>
                      </Paper>
                    )}
                  </Box>
              </Grid>


            </Grid>
          </Grid>

          <Grid item className={classes.gridContainer} xs={12} md={4} sm={12} >
            <Grid container >

              <Grid className={classes.gridItem} item xs={6} md={12} sm={4} >
                <Box width="100%">
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

export default Mensajes;