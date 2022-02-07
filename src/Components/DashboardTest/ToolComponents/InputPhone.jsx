import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  tel:{
    marginBottom: theme.spacing(1),
            height: "40px",
            border: "none",
            outline: "none",
            padding: "20px",

            [theme.breakpoints.up("xl")]: {
              height: "50px",
              fontSize:"1.2rem",
            },
  }
}));

const InputPhone = () => {
    const classes = useStyles();

    return (
        <div>
            <input className={classes.tel} type="tel" placeholder="Ej: 7545-9833" />
        </div>
    );
};

export default InputPhone;
