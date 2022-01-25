import React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textArea: {
        width: "300px",
        marginTop: "15px",
    },
}));

const TextArea = () => {
    const clasess = useStyles();

    const WordsLimit = 140;
    const [values, setValues] = React.useState({
        name: "Mensaje..."
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <>
            <TextField
                className={clasess.textArea}
                multiline
                rows={4}
                label="Escribir"
                inputProps={{
                    maxlength: WordsLimit
                }}
                value={values.name}
                helperText={`${values.name.length}/${WordsLimit}`}
                onChange={handleChange("name")}
                variant="outlined"

            />
        </>
    )
};

export default TextArea;
