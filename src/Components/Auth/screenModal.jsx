import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import image from "../../images/signup-img.jpg";
import Login from "./login";
import SignUp from "./signup";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top:0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//la cosita donde va el contenido del login
const ModalWrapper = styled.div`
    width: 834px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.7);
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    @media(max-width:40em){
        margin:none;
        border-radius:0;
        height:100%;
        width:100%;
    }
`;

const ModalImg = styled.div`
    width: 100%;
    height: 100%;
    padding: none;
    border-radius: 0 10px 10px 0;
    background-image: linear-gradient(
            180deg,
            rgba(34, 90, 255, 0.5) 0%,
            rgba(9, 20, 71, 0.5) 100%
        ),
        url(${image});
    background-position: center;
    background-size: cover;

    #txt-modal-img{
        color:white;
        font-family:roboto;
        font-size:25pt;
        width:270px;
        margin-left:15px;
        margin-top:425px;
    }

    @media(max-width:40em){
        display:none;
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    line-height: 1.8;
    border-radius: 10px 0 0 10px;
    color: #141414;
    background-color: rgba(237, 237, 237, 1);

    .fa-times{
        color:#bdbdbd;
        box-shadow: #000000;
        position: absolute;
        right:10%;
        top:5%;
        display:none;
    }

    @media(max-width:60em){
        margin-top:-25%;
        position:fixed;
        height:100vh;
        border-radius:0;
        width:100%;
        .fa-times{
            display:inline-block;
        }
    }

    @media(max-width:500px){
        margin-top:0;
        .fa-times{
            display:inline-block;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
`;

export default function Modal({ showModal, setShowModal, action, setAction }) {
    const modalRef = useRef();
    const mobileRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        trasnform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target || mobileRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
                console.log("I pressed");
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydon", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <Container>
                    <Background onClick={closeModal} ref={modalRef}>
                        <animated.div style={animation}>
                            <ModalWrapper showModal={showModal}>
                                <ModalContent>
                                    <i className={"fas fa-times"} onClick={closeModal} ref={mobileRef}/>
                                    {action == "Login" ? <Login /> : <SignUp />}
                                </ModalContent>
                                <ModalImg>
                                    <p id='txt-modal-img'>Se mas eficiente y obtén más ganancias.</p>
                                </ModalImg>
                            </ModalWrapper>
                        </animated.div>
                    </Background>
                </Container>
            ) : null}
        </>
    );
}
