import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import "./form.css";

const ModalWrapper = styled.div`
    z-index: 100;
`;

const FeedbackWrapper = styled.div`
    margin-top: 25px;
    text-align: center;
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
    bottom: -500px;
    left: 1vw;
    z-index: 100;
    transition: all 0.5s ease-in-out;

    @media (max-width: 1024px) {
        left: 50%;
        transform: translate(-50%, 30%);
    }

    @media (max-width: 550px) {
        transform: translate(-50%, 40%);
    }
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
});

export default function ChatSupport() {
    const [display, setDisplay] = useState(true);
    const [errorFlag, setErrorFlag] = useState(false);
    const [error, setError] = useState("");
    const [successFlag, setSuccessFlag] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const chatBody = useRef();
    const bubble = useRef();
    const classes = useStyles();

    const show = () => {
        setDisplay(true);

        setTimeout(() => {
            const element = document.getElementById("chat-body");
            element.classList.add("extended");
        }, 1);
    };

    const hide = () => {
        const element = document.getElementById("chat-body");
        element.classList.remove("extended");

        setTimeout(() => {
            setDisplay(false);
            setSuccessFlag(false);
            setErrorFlag(false);
            setError("");
        }, 500);
    };

    const validateEmail = (event) => {
        if (
            !event.target.value.match(
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            )
        ) {
            setError("Por favor verifique que la direccion de correo electronica sea correcta");
        } else {
            if (event.target.value.length === 0) {
                setError("Campo obligatorio");
            }
            setError("");
        }
    };

    const validateNotBlank = (event) => {
        if (event.target.value.length === 0) {
            setErrorFlag(true);
        } else {
            setErrorFlag(false);
        }
    };

    async function sendEmail(e) {
        e.preventDefault(); //DO NOT REMOVE

        setLoading(true);
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let mess = document.getElementById("message");
        if (name.value.length > 0 && email.value.length > 0 && mess.value.length > 0) {
            setSuccessFlag(false);
            setErrorFlag(false);

            await emailjs.sendForm("service_wl3zbf6", "template_9wvlr67", form.current, "user_OHQz1Af5m5VBmoI8yMSsx").then(
                (result) => {
                    console.log(result.text); //make the user know the form was sent
                    setSuccessFlag(true);
                },
                (error) => {
                    console.log(error.text);
                    setErrorFlag(true);
                }
            );
        } else {
            setErrorFlag(true);
            setError("Campo Obligatorio");
        }

        setLoading(false);
    }

    useEffect(() => {
        function closeModal(event) {
            if ((chatBody.current && event.target !== bubble.current && !chatBody.current.contains(event.target)) || (chatBody.current && event.key === "Escape")) {
                hide();
            }
        }

        document.addEventListener("mousedown", closeModal);
        document.addEventListener("keydown", closeModal);
        return () => {
            document.removeEventListener("mousedown", closeModal);
            document.removeEventListener("keydown", closeModal);
        };
    }, [chatBody]);

    return (
        <ModalWrapper>
            <Bubble onClick={show} ref={bubble}>
                ?
            </Bubble>
            {display ? (
                <ChatBody ref={chatBody} id="chat-body">
                    <div className="form-container">
                        <h4 className="form-disclaimer">Rellene el formulario a continuación y le contestaremos lo antes posible.</h4>
                        <div className={classes.offset}>
                            <form id="contact-form" onSubmit={sendEmail} onClick={(e) => e.stopPropagation()} ref={form}>
                                <TextField
                                    name="cus_name"
                                    error={errorFlag}
                                    label="Nombre"
                                    placeholder="Nombre"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                    onChange={validateNotBlank}
                                    id="name"
                                />
                                <TextField
                                    error={error.length === 0 ? false : true}
                                    label="Correo Electronico"
                                    placeholder="Correo Electronico"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={error}
                                    name="cus_email"
                                    onChange={validateEmail}
                                    id="email"
                                />
                                <TextField
                                    name="message"
                                    error={errorFlag}
                                    label="Mensaje"
                                    placeholder="Mensaje"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                    onChange={validateNotBlank}
                                    id="message"
                                />
                                <input disabled={loading || errorFlag || error.length > 0} type="submit" value="Enviar" />
                                <FeedbackWrapper>
                                    {errorFlag && <span className="error">Hubo un problema, por favor vuelve a intentar en otro momento</span>}
                                    {successFlag && <span className="success">Tu mensaje se envio exitosamente!</span>}
                                </FeedbackWrapper>
                            </form>
                        </div>
                    </div>
                </ChatBody>
            ) : null}
        </ModalWrapper>
    );
}
