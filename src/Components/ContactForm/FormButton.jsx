import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';
import MessageIcon from '@material-ui/icons/Message'
import Zoom from '@material-ui/core/Zoom'

const useStyles=makeStyles((theme)=>({
    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
    },

    TextField: {
        width: '100%',
    }
}))

const FormButton = () => {

    const styles=useStyles();

    const body=(
        <div className={styles.modal} >
            <div align="center">
                <h2>Formulario</h2>
            </div>
            <TextField label="Nombre" className={styles.textField}/>
            <br />
            <TextField label="Apellido" className={styles.textField}/>
            <br />
            <TextField label="Correo Electrionco" className={styles.textField}/>
            <br /> <br />
            <div align="center">
                <Button color="primary">Enviar</Button>
                <Button>Cancelar</Button>
            </div>

        </div>
    )

    return (
        <div>
         {/*  <Zoom
            in = {true}
            timeout= {{enter:500, exit:500}}
            unmountOnExit>

            <Fab variant="extended" size="medium" color="primary" aria-label="add">
                <MessageIcon style={{marginRight:10}} />Mensaje
            </Fab>

         </Zoom> */}
        </div>
    )
}

export default FormButton
