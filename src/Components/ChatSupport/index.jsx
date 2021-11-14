import React, { useRef, useState } from "react";
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

export default function ChatSupport() {
    const [display, setDisplay] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);
    const form = useRef();

    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault(); //DO NOT REMOVE

        //make this secrets
        emailjs.sendForm("SERVICE_ID", "template_9wvlr67", form.current, "user_OHQz1Af5m5VBmoI8yMSsx").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
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

    return (
        <ModalWrapper>
            <Bubble onClick={show}>?</Bubble>
            {display ? (
                <ChatBody>
                    <div class="container" onClick={hide}>
                        <h4 className="form-disclaimer">Rellene el formulario a continuación y le contestaremos lo antes posible.</h4>
                        <div className={classes.offset}>
                            <form id="contact" onSubmit={sendEmail} onClick={(e) => e.stopPropagation()} ref={form}>
                                {/* Names of the elements must match with the params you are using in emailjs */}
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
                                </Button>
                            </form>
                        </div>
                    </div>
                </ChatBody>
            ) : null}
        </ModalWrapper>
    );
}
