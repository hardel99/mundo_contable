import styled from 'styled-components';


export const BrandSect = styled.div `
background-color: var(--blue);
width:100%;
height:100vh;
color: var(--black);
padding: 0 140px;
border:3px solid black;
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

export const BrandRow = styled.div `
  display: flex;
  width:100%;
  justify-content:space-between;
  align-items: center;
  flex-direction: row;
  
  /*flex-wrap: wrap;*/
  border:3px solid #ff5bdb;  
`

export const Column = styled.div`
  max-width: 1010PX;
  height:100vh;
  flex-basis: 50%;
  border:3px solid #bcf09e; 
`;

export const VideoWrapper = styled.div`
  position:absolute;
  border:3px solid #00d9ff; 
`;

export const ContainerElements = styled.div`
  width:1010px;
  height:625px;
  display:flex;
  justify-content:flex-end;  
  border:3px solid #00d9ff; 
`;

export const TextContainer = styled.div`
  width: 780px;
  height: 360px;
  background-color: #fff;
  border-radius: 5px;
  border:3px solid red; 
`;

export const TextWrapper = styled.div`
  margin:32px;
  border:3px solid goldenrod; 
`;

export const Title = styled.h1`
  font-family: NunitoSans;
  font-size: 40px;
  color:darkblue;
`;

export const Paragraph = styled.p`
  color:darkblue;
`;

export const ImgWrapper = styled.div`
  width: 450px;
  height: 600px;
  border:3px solid goldenrod; 
  border-radius:5px;
`;

export const ImgAccounter = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border:3px solid red; 
`;





