import React, { useRef, useState, useEffect, useCallback } from "react";
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import image from '../img/paisaje.jpg'
import Login from './login';
import SignUp from "./signup";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//la cosita donde va el contenido del login
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 20px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  padding: none;
  border-radius: 0 10px 10px 0;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  border-radius: 10px 0 0 10px;
  color: #141414;
  background-color: #fff;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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


export default function Modal ({showModal,setShowModal,action, setAction}) {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        trasnform: showModal ? `translateY(0%)` : `translateY(-100%)`

    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal){
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
        
    );

    useEffect(
        () => {
            document.addEventListener('keydon', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    )

return (
    <>
        {showModal ? (
        <Container>
        <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
                <ModalWrapper showModal = {showModal}>   
                    <ModalContent>
                        {action == 'Login' ? <Login/> : <SignUp/>}
                    </ModalContent>
                    <ModalImg src={image} alt='paisaje'/> 
                </ModalWrapper>
            </animated.div>
        </Background>
        </Container> 
        ) : null}
        </>
    );
};