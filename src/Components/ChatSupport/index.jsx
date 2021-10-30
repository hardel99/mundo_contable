import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import "./form.css";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

const ModalWrapper = styled.div`
    z-index: 100;
`;

const Bubble = styled.div`
    background-color: #727bcc;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    left: 2vw;
    bottom: 2vw;
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 60px;
    font-size: 30px;

    &:hover {
        cursor: pointer;
    }
`;

const ChatBody = styled.div`
    position: fixed;
    bottom: 0px;
    left: 1vw;
    z-index: 100;
`;

const useStyles = makeStyles({
    inputs: {
        display: "block",
        margin: "20px 0px",
    },
    offset: {
        background: "white",
        padding: "25px",
        margin: "50px 0",
        marginBottom: "0",
    },
    submit: {
        color: "white",
        background: "#1a6e3e",
        border: "none",
        fontSize: 15,
        fontWeight: "bold",
        padding: "10px 0px",
        borderRadius: 5,
        width: "100%",
        marginTop: "25px",

        "&:hover": {
            background: "#4e966d",
        },
    },
});

function sendEmail(e) {
    e.preventDefault(); //DO NOT REMOVE

    //instead of e.target goes the refence to the element with the info
    //https://www.emailjs.com/docs/examples/reactjs/
    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.target, "USER_ID").then(
        (result) => {
            window.location.reload(); //to reload the page
        },
        (error) => {
            //rayos se cayo prod
            console.log(error.text);
        }
    );
}

function sendForm() {
    const form = document.getElementById("contact");
    form.submit();
    //make the user know the form was sent
    alert("your email was sent!");
}

export default function ChatSupport() {
    const [display, setDisplay] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);

    const classes = useStyles();

    return (
        <ModalWrapper>
            <Bubble onClick={show}>?</Bubble>
            {display ? (
                <ChatBody>
                    <div class="container" onClick={hide}>
                        <h4 className="form-disclaimer">Rellene el formulario a continuación y le contestaremos lo antes posible.</h4>
                        <div className={classes.offset}>
                            <form id="contact" onSubmit={sendEmail} onClick={(e) => e.stopPropagation()}>
                                <TextField error={errorFlag} label="Nombre" placeholder="Nombre" variant="outlined" className={classes.inputs} helperText={"Campo obligatorio"} />
                                <TextField
                                    error={errorFlag}
                                    label="Correo Electronico"
                                    placeholder="Correo Electronico"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                />
                                <TextField error={errorFlag} label="Mensaje" placeholder="Mensaje" variant="outlined" className={classes.inputs} helperText={"Campo obligatorio"} />
                                <Button size="small" variant="contained" className={classes.submit} onClick={sendForm}>
                                    Enviar
                                    {/* Have to add an
                                    input type=submit or rather change the 
                                    onSubmit function for the form and put it in this button
                                    and map the information */}
                                </Button>
                            </form>
                        </div>
                    </div>
                </ChatBody>
            ) : null}
        </ModalWrapper>
    );
}
