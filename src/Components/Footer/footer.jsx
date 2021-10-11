import React from 'react'
import styled from 'styled-components'
import Footer from './index'
import {FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
import { IconContext} from 'react-icons/lib'
import {Btn} from "../ButtonElement"
import useModal from '../Hooks/useModal';
import Modal from '../Modal.jsx'


export const Container = styled.div`
    padding: 80px 60px;
    background: radial-gradient(circle, #2E2E36 0%, 
    #3a3a4d 100%);

    @media screen and (max-width:650px) {
        padding: 60px 20px;
    }

`

export const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
`

export const Row = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  a .icon{
      color: #76768a;
      margin-bottom: 20px;


      &:hover{
          color: var(--accent-dark);
      }
  }
  
  @media screen and (max-width:650px) {
    margin-left: 10px;
    margin-right: 20px;
}

`

export const Link = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
      color: var(--accent);
      transition: 200ms ease-in;
  }

  &.direct{
      color: #92a0cc;
      &:hover{
        color: var(--accent-dark);

      }

    }

`

export const Pfooter = styled.p `
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
`

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`


export function FooterContainer() {
    const [isOpenMapModal, openMapModal, closeMapModal] = useModal();

    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Contacto</Footer.Title>
                        <Pfooter>Colonia Buenos Aires III, Diagonal Centroamericana.
                        Condominios 2000, local B-23.</Pfooter>
                        <Pfooter>San Salvador, El Salvador</Pfooter>
                        <Pfooter>Telefono: (503) 2225-5318</Pfooter>
                        <Footer.Link href="#" className="direct" >info@mundocontables.net</Footer.Link>
                        <Btn onClick={openMapModal} >Ubicacion</Btn>

                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Diplomados </Footer.Title>
                        <Footer.Link href="#" >Diplomado Innovación Contable Empresarial.</Footer.Link>
                        <Footer.Link href="#" >Diplomado Innovación Contable Emprendedores.</Footer.Link>
                        <Footer.Link href="#" >Diplomado Innovación Contable Profesional.</Footer.Link>
                        <Footer.Link href="#" >Diplomado creación de aula virtual Moodle.</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Apps</Footer.Title>
                        <Footer.Link href="#" >App Mundo Textos</Footer.Link>
                        <Footer.Link href="#" >Programa Contable</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Siguenos</Footer.Title>

                        <IconContext.Provider value={{ size: "30px"}}>
                        <a href="https://www.facebook.com/mundocontables/"><FaFacebookF className="icon"/></a>
                        <a href="https://www.instagram.com/mundocontables/"><FaInstagram className="icon"/></a>
                        <a href=""><CgMail className="icon"/></a>
                        <a href="https://www.youtube.com/channel/UC5o3xZ7V-J4JGH-nd3h4FIg"><FaYoutube className="icon"/></a> 
                        </IconContext.Provider>

                    </Footer.Column>

                </Footer.Row>
            </Footer.Wrapper>
            <Modal 
                isOpen={isOpenMapModal}
                closeModal={closeMapModal}
                title="Mapa de cabañas 0w0" >
                
                
            </Modal>
        </Footer>
    )
}