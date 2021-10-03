import React, { useState } from "react";
import styled from "styled-components";

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
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid green;
    position: fixed;
    bottom: 0px;
    left: 1vw;
`;

export default function ChatSupport() {
    const [display, setDisplay] = useState(false);
    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);

    return (
        <>
            <Bubble onClick={show}>?</Bubble>
            {display
                ? {
                      /* <ChatBody onClick={hide}>
                    <input type="submit" value="Enviar" />
                </ChatBody> */
                  }
                : null}
            <ChatBody>
                <h3>Rellenele el formulario a continuacion y le contestaremos lo antes posible</h3>
                <input type="text" placeholder="* Nombre" />
                <input type="email" placeholder="* E-mail" />
                <textarea name="msg" id="msg" cols="30" rows="10" placeholder="* Mensaje"></textarea>
                <input type="button" value="Enviar" />
            </ChatBody>
        </>
    );
}
