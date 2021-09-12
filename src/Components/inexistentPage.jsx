import React from "react";
import styled from "styled-components";
import sample from "./../images/building.svg";
import Button from '@material-ui/core/Button';


const NfSection = styled.div`
   display: flex;
   justify-content: center; 
   align-items: center;
   padding:40px;
   height :100vh;
   position:relative;


    @media screen and (max-width: 600px) {
        margin:20px;
        padding:20px;
  } 

`;

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align: center;

   
    
    .tagline 
    {
        color:#f07272;
    }

    img {
       width: 100%;
       object-fit: cover;
       object-position: bottom;
    }

`;

const ImageWrapper = styled.div`
     width:500px;
     margin-left:60px;
     margin-bottom: 60px;

     @media screen and (max-width: 600px) {
        width:100%;
    } 

    @media screen and (max-width: 300px) {
        margin-left:30px;
    } 
`;

export default function NotFound() {
    return (
        <NfSection>
            <Container>
                <h1>PAGINA EN MANTENIMIENTO</h1>
                <h2>
                    Esta parte de la pagina se encuentra bloqueada por el momento, por razones de seguridad y mantenimiento, para regresar, hacer click en la flecha de retroceso, en el navegador
                </h2>
                <h2 className="tagline">Precaución, zona de construcción:</h2>
                <br />
                <ImageWrapper>
                    <img src={sample} alt={""} />
                </ImageWrapper>
                <a href="/">
                <Button variant="contained" color="primary"> Regresar </Button>
                </a>
            </Container>
        </NfSection>
    );
}
