import styled from 'styled-components';


export const BrandSect = styled.div `
background-color: var(--blue);
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
color: var(--black);
padding: 0 140px;
z-index: 3;


/*
@media screen and (max-width: 1000px) {
   padding:100px 80px;
  }
  
  @media screen and (max-width: 850px) {
   flex-direction:column;
   padding:100px 80px;
   justify-content:flex-start;
  }

  @media screen and (max-width: 425px) {
   padding:100px 20px;
  }
  */

`



export const DotsBg1 = styled.img`
  position:absolute ;
  left:0;
  bottom:0;
  transform:rotate(90deg);
`;

export const DotsBg2 = styled.img`
  position:absolute ;
  right:0;
  top:0;
`;


export const BrandRow = styled.div `
  width:100%;
  position: relative;


 /* flex-direction: row;
  flex-wrap: wrap;
  
   display:flex;
  justify-content:center; (Responsive center content)
  */

  /*   border:3px solid #ff5bdb;  */
`

export const Column = styled.div`
  display:flex;
  justify-content:flex-end;
  max-width: 100%;
  /*   border:3px solid #bcf09e; */  
`;

export const VideoWrapper = styled.div`
  max-width:620px;
  height:380px;
  position:absolute;
  bottom: 450px;
  box-shadow: 24px 24px 24px 0 rgba(9, 20, 71, 0.25);
  z-index:1; 
  /*   border:3px solid #00d9ff; */
`;

export const ContainerElements = styled.div`
  width:1010px;
  height:625px;
  display:flex;
  justify-content:flex-end; 
  align-items:flex-end;
  /*   border:3px solid #1b0000; */
`;

export const TextContainer = styled.div`
  width: 780px;
  height: 360px;
  margin-right:180px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 12px 0 rgba(9, 20, 71, 0.25);
  position:absolute;
  /*   border:3px solid red; */
`;

export const TextWrapper = styled.div`
  width:500px;
  margin:32px;
  /*   border:3px solid goldenrod; */
`;

export const Title = styled.h1`
  font-size: var(--title-size);
  font-weight: 800;
  margin-bottom:1rem;

`;

export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: var( --subhead-size);
  line-height:1.5;
  margin-bottom:1rem;
 
`;

export const ImgWrapper = styled.div`
  width: 400px;
  position:absolute;
  bottom:30px;
  box-shadow: 0 6px 12px 0 rgba(9, 20, 71, 0.25);
  
  /*  border:3px solid goldenrod; */
`;

export const ImgAccounter = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border-radius:5px;

  /*   border:3px solid red; */
`;


