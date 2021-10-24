import React, { useState } from "react";
import styled from "styled-components";
import FormTemp from "./form";

const modalWrapper = styled.div`
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
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid green;
    position: fixed;
    bottom: 0px;
    left: 1vw;
    z-index: 100;
`;

export default function ChatSupport() {
    const [display, setDisplay] = useState(false);
    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);

    return (
        <modalWrapper>
            <Bubble onClick={show}>?</Bubble>
            {display ? (
                <ChatBody onClick={hide}>
                    <FormTemp />
                </ChatBody>
            ) : null}
        </modalWrapper>
    );
}
