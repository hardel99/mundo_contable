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

 
 @media screen and (max-width: 750px) {
     padding:0 20px;
 }
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
 padding: 0 1rem;
 width: 860px;
 color: #fff;
 text-align:center; 

 @media screen and (max-width: 750px) {
     width:100%;
 }

 @media screen and (max-width: 425px){
    text-align:left;
 }

`;

export const HeroH1 = styled.h1`
 font-size: clamp(2.5rem, 10vw, 5rem); 
 margin-bottom:2rem;
 border-bottom: 3px solid var(--accent);

`;

export const HeroP = styled.p`
font-family: 'Roboto', sans-serif;
font-size: clamp(1rem, 1.5vw, 2rem); 
margin-bottom:2rem;
line-height: 2rem;

`;

export const HeroBtn = styled.button`
 font-size: var(--type-button);
 font-weight: bold;
 padding: .5rem 5rem;
 border-radius:5px;
 border: 2px solid #fff;
 background: none;
 color:#fff;
 transition: 0.3s ease-out;
 outline: none;


&:hover {
    box-shadow: inset 300px 0 0 0  var(--blue);
    cursor: pointer;
    color: #fff;
    border: 2px solid var(--blue);

}
`