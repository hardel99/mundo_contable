import styled from 'styled-components'
import ImgBg from '../../images/bg.jpg'

export const HeroContainer = styled.div`
 background-image:linear-gradient(to top, rgba(9, 20, 71, 0.5),
 rgba(9, 20, 71, 0.5)), url(${ImgBg});
 background-position:center;
 background-size:cover; 
 display: flex;
 justify-content: center; 
 align-items: center;
 padding:0 140px;
 height :100vh;
 position:relative;
 z-index:1; 
`;

export const HeroContent = styled.div `
 display: flex;
 justify-content: center; 
 align-items: center;
 height: calc(100vh-80px);
 max-height: 100%;
 width: 100vw;
 padding: 0rem calc((100vw-1300px) /2);
 `;
 
export const HeroItems = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center; 
 align-items: center;
 height: 100vh;
 max-height: 100%;
 padding: 0 2rem;
 width: 860px;
 color: #fff;
 text-align:center;

 @media screen and (max-width: 650px) {
     width:100%;
 }

`;

export const HeroH1 = styled.h1`
 font-size: clamp(2.5rem, 10vw, 5rem); 
 /* Clamp is for responsive text without media queries although these sizes will not be the official ones*/
 /*  font-size: var(--h1-size); */ 
 margin-bottom:2rem;
 box-shadow: 0 5px var(--accent);
`;

export const HeroH2 = styled.h2`
 font-size: clamp (2.5rem, 10vw, 5rem);
 /*font-size: var(--title-size);*/
 margin-bottom:1rem;
 letter-spacing: 3px;
`;

export const HeroP = styled.p`
font-family: 'Roboto', sans-serif;
font-size: clamp (2rem, 2.5vw, 3rem);
margin-bottom:2rem;
`;

export const HeroBtn = styled.button`
 font-size: var(--type-button-size);
 font-weight: bold;
 padding: .5rem 5rem;
 border: none;
 border-radius:5px;
 background: var(--green);
 color: #fff;
 transition: 0.2s ease-out;

 &:hover 
    {
     background: var(--darkgreen);
     transition: 0.2s ease-out;
     cursor: pointer;
    }
`