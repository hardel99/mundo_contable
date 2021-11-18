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
    const [successFlag, setSuccessFlag] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const chatBody = useRef();
    const classes = useStyles();

    const show = () => {
        setDisplay(true);

        setTimeout(() => {
            const element = document.getElementById("chat-body");
            element.classList.add("extended");
        }, 5);
    };

    const hide = () => {
        const element = document.getElementById("chat-body");
        element.classList.remove("extended");

        setTimeout(() => {
            setDisplay(false);
            setSuccessFlag(false);
            setErrorFlag(false);
        }, 500);
    };

    async function sendEmail(e) {
        e.preventDefault(); //DO NOT REMOVE

        setLoading(true);
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

        setLoading(false);
    }

    useEffect(() => {
        function closeModal(event) {
            if (chatBody.current && !chatBody.current.contains(event.target)) {
                hide();
            }
        }

        document.addEventListener("mousedown", closeModal);
        return () => {
            document.removeEventListener("mousedown", closeModal);
        };
    }, [chatBody]);

    return (
        <ModalWrapper>
            <Bubble onClick={show}>?</Bubble>
            {display ? (
                <ChatBody ref={chatBody} id="chat-body">
                    <div className="container">
                        <h4 className="form-disclaimer" onClick={hide}>
                            Rellene el formulario a continuación y le contestaremos lo antes posible.
                        </h4>
                        <div className={classes.offset}>
                            <form id="contact" onSubmit={sendEmail} onClick={(e) => e.stopPropagation()} ref={form}>
                                <TextField
                                    name="cus_name"
                                    error={errorFlag}
                                    label="Nombre"
                                    placeholder="Nombre"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                />
                                <TextField
                                    error={errorFlag}
                                    label="Correo Electronico"
                                    placeholder="Correo Electronico"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                    name="cus_email"
                                />
                                <TextField
                                    name="message"
                                    error={errorFlag}
                                    label="Mensaje"
                                    placeholder="Mensaje"
                                    variant="outlined"
                                    className={classes.inputs}
                                    helperText={"Campo obligatorio"}
                                />
                                <input disabled={loading} type="submit" value="Enviar" />
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
