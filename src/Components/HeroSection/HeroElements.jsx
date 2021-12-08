import styled from 'styled-components'
import ImgBg from '../../images/bg-1.jpg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

export const HeroContainer = styled.div`
 /*background-image:linear-gradient(to top, rgba(9, 20, 71, 0.5),
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
 }*/
 height: 100vh;
 max-height: 1100px;
 position: relative;
 overflow: hidden;
`;

export const HeroWrapper = styled.div `
/*
 display: flex;
 justify-content: center; 
 align-items: center;
 height: calc(100vh-80px);
 max-height: 100%;
 width: 100vw;
 padding: 0rem calc((100vw-1300px) /2);
 */
 width:100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
 position: relative;
 `;

 export const HeroSlide = styled.div `
 width:100%;
 height: 100%;
 border:solid snow 2px;
 `

 export const HeroSlider = styled.div `
 position: absolute;
 top: 0;
 left: 0;
 width:100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;

 &::before {
     content: '';
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    background:linear-gradient(
        to top, 
        rgba(9, 20, 71, 0.5),
        rgba(9, 20, 71, 0.5)
    );
 }
 `

 export const HeroImage = styled.img `
 position: absolute;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 object-fit:cover;
 `

 export const SliderButtons = styled.div `
 position: absolute;
 bottom: 50px;
 right: 50px;
 display: flex;
 z-index: 10;
 `

 export const PrevArrow = styled(IoIosArrowBack) `
     width: 50px;
     height: 50px;
     color:#fff;
     cursor: pointer;
     background: #000d1a;
     border-radius: 50px;
     padding: 10px;
     margin-right: 1rem;
     user-select: none;
     transition: 0.3s;

     &:hover{
         background: var(--accent);
         transform: scale(1.05);
     }
 `

 export const NextArrow = styled(IoIosArrowForward) `
    width: 50px;
     height: 50px;
     color:#fff;
     cursor: pointer;
     background: #000d1a;
     border-radius: 50px;
     padding: 10px;
     margin-right: 1rem;
     user-select: none;
     transition: 0.3s;

     &:hover{
         background: var(--accent);
         transform: scale(1.05);
     }
 `
 
export const HeroItems = styled.div `
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
text-align:center; 
align-items: center;
color: #fff;
width: 860px;
padding: 0 1rem;



 /*
 height: 100vh;
 max-height: 100%;

 @media screen and (max-width: 750px) {
     width:100%;
 }

 @media screen and (max-width: 425px){
    text-align:left;
 }
*/
`;

export const HeroH1 = styled.h1`
 font-size: clamp(2.5rem, 10vw, 5rem);  
 margin-bottom:2rem;
 border-bottom: solid 3px  var(--accent);
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
 width:300px;


&:hover {
    box-shadow: inset 300px 0 0 0  var(--blue);
    cursor: pointer;
    color: #fff;
    border: 2px solid var(--blue);

}
`
