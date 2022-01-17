import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountrySelect from "./ToolComponents/CountryTextField";


const useStyles = makeStyles(theme => ({
  smsPage: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    padding: "140px 100px",
  },
  smsContainer:{
    width: "800px",

    '& h1':{
      marginBottom: theme.spacing(2),
    },
    '& p':{
      marginBottom: theme.spacing(2),
    },
  },
  stepperbox:{
    background: "#F6F6FB",
    borderRadius:"10px",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    <b>Seleccionar código postal.</b>,
    <b>Crear lista de contactos</b>,
    <b>Escribir mensaje</b>
  ];
}

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
          <h1>(._.)</h1>
          <input type="tel" className="tel" />
        </>
      ); case 2:
      return (
        <>
          <h1>(∩ಠ-ಠ)⊃━☆ﾟ.*･｡ﾟ</h1>
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

        <div className={classes.smsContainer} >
          <h1>MUNDO MENSAJES</h1>
          <p>Envió de mensajes de texto (SMS) hacia celulares de El Salvador: Tigo, Claro, Digicel, movistar,
            primero debes escribir el numero  de teléfono, luego escribes el contenido del mensajito, escribes
            tu nombre y finalizas haciendo clic en el botón  enviar, este servicio que te proporcionamos es
            igual al de listasal.
          </p>

          <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepperbox}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
                Reiniciar
              </Button>
            </Paper>
          )}
        </div>
      </div>
    </>
  );
};

export default Mensajes;