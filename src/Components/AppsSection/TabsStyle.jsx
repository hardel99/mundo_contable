import styled from 'styled-components';

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  flex-direction: row;

  @media screen and (max-width: 500px) {
    width:100%;
  }
`;

export const Column1 = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:flex-start;
  }

  @media screen and (min-width: 1600px) {
  display: flex;
  justify-content: flex-end;
  padding-right:30px;
}
`;

export const Column2 = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  display:flex;
  justify-content:flex-end;


  @media screen and (max-width: 900px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content:flex-start;
  }

  @media screen and (min-width: 1600px) {
  display: flex;
  justify-content: flex-start;
  padding-left:60px;
}

`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 20px;
  font-size: clamp(0.8em, 3vw, 20px); 
  display:flex;


  @media screen and (max-width: 1024px) {
     width: 100%;
  }

`;

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  max-width: 440px;
  margin-bottom: 1em;
  letter-spacing:2px;
  line-height: 45px;

  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
  
  @media screen and (max-width: 500px) {
    letter-spacing:1px;
    line-height: 30px ;

  }

`;

export const BtnWrapper = styled.div `
  margin-top: 1rem;
`

export const Data = styled.div `
 width:100%;

 `

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content:center;

  @media screen and (max-width: 850px) {
    max-width: 455px;
  }

`;

export const ImgApp = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  @media screen and (max-width: 350px) {
    max-height: 400px;
    }

`;