import styled from 'styled-components';


export const BrandSect = styled.div `
background: linear-gradient(184deg, rgba(84,126,249,1) 0%, rgba(34,90,255,1) 100%);
width:100%;
height:920px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
color: var(--black);
padding-bottom:150px;

  @media screen and (max-width: 900px) {
   padding:0 50px;
  }

  @media screen and (max-width: 700px) {
   padding:0;
  }

`

export const DotsBg1 = styled.img`
  position:absolute ;
  left:0;
  bottom:0;
  transform:rotate(90deg);

  @media screen and (max-width: 900px) {
    width:30%;
  }

  @media screen and (max-width: 700px) {
    display:none;
  }


`;

export const DotsBg2 = styled.img`
  position:absolute ;
  right:0;
  top:0;

  @media screen and (max-width: 900px) {
    width:30%;
  }

  @media screen and (max-width: 700px) {
    display:none;
  }

`;

export const BrandRow = styled.div `
   width:100%;
   /*border:3px solid #ff5bdb;  */
`;

export const VideoWrapper = styled.div`
  position:relative;
  bottom:150px;
  width:700px;
  height:400px;
  box-shadow: 24px 24px 24px 0 rgba(9, 20, 71, 0.25);
  transition: ease-in-out 0.5s;
  /*border:3px solid #00d9ff; */
  
  
  @media screen and (max-width: 900px) {
  width:550px;
  height:380px;
  bottom:auto;
  }

  @media screen and (max-width: 500px) {
    width:100%;
    height:300px;
  }

  @media screen and (min-width: 1600px) {
  
  }
  
`;

export const Column = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow: row;
  width:100%;
  max-width: 100%;
  /*border:3px solid #bcf09e;*/ 

  
  @media screen and (max-width: 850px) {
  }

  @media screen and (max-width: 425px) {
  }

  @media screen and (min-width: 1000px) { 

  }

`;

export const ContainerElements = styled.div`
  width:100%;
  height:440px;
  display:flex;
  justify-content:center; 
  align-items:flex-end;

  @media screen and (min-width: 1600px) {
    justify-content:center; 
    align-items:center;
    /*border:3px solid #1b0000; */

}

  @media screen and (max-width: 900px) {
    justify-content:center; 
    align-items:center;
  }

  
  @media screen and (max-width: 700px) {
    
  }

`;

export const TextContainer = styled.div`
  width: 600px;
  height: 380px;
  position: absolute;
  margin-right:150px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 12px 0 rgba(9, 20, 71, 0.25);
  transition: ease-in-out 0.5s;
  /*border:3px solid red; */

  @media screen and (min-width: 1600px) {
    width: 700px;
    margin-right:250px;
    /* border:3px solid red; */
  }
  
  @media screen and (max-width: 900px) {
    margin-left:auto;
    width: 500px;
    height: 350px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display:flex;
    justify-content:center;
    position: static;
    margin-right:auto;
    border-radius: 0;
  }
`;

export const TextWrapper = styled.div`
  width:500px;
  padding:30px;  

  @media screen and (min-width: 1600px) {
    padding: 30px 60px;
    width:600px;
    /* border:3px solid #6ada20;*/
  }

  @media screen and (max-width: 900px) {
    padding:20px;  
    width:400px;
  }
`;

export const Title = styled.h1`
  font-size: var(--title-size);
  font-weight: 800;
  margin-bottom:1rem;

  @media screen and (max-width: 900px) {
    font-size: 40px;
    margin-bottom:1.5rem;
  }

  @media screen and (max-width: 00px) {
    font-size: 40px;
  }

`;

export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: var( --subhead-size);
  line-height:1.5;
  margin-bottom:1rem;
 
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

`;

export const ImgWrapper = styled.div`
  position: absolute;
  margin-left:500px;
  margin-bottom:40px;
  width: 300px;  
  box-shadow: 0 6px 12px 0 rgba(9, 20, 71, 0.25);
  transition: ease-in-out 0.5s;
  z-index:1;

  @media screen and (min-width: 1600px) {
    width: 350px;  
    margin-left:700px;
    margin-bottom:auto;
    /* border:3px solid goldenrod; */
  }
  
  @media screen and (max-width: 900px) {
    width: 230px;  
    height:280px;
    object-fit:cover;
    margin-bottom:auto;
    margin-left:440px;
  }

  @media screen and (max-width: 700px) {
    display:none;
  }
  
`;

export const ImgAccounter = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border-radius:5px;
  /*border:3px solid red; */

    
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    object-fit:cover
  }

`;


