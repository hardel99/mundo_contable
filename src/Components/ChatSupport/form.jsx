import React from "react";
import { Button } from "@material-ui/core";
import "./form.css";

const FormTemp = () => {
    return (
        <div class="container">
            <form id="contact" action="" method="post">
                <h4>Rellene el formulario a continuación y le contestaremos lo antes posible.</h4>

                <fieldset>
                    <input placeholder="Nombre" type="text" tabindex="1" required autofocus />
                </fieldset>

                <fieldset>
                    <input placeholder="Correo" type="email" tabindex="" required />
                </fieldset>

                <fieldset>
                    <textarea placeholder="Escribe tu mensaje aqui..." tabindex="5" required></textarea>
                </fieldset>
                <Button size="small" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default FormTemp;
