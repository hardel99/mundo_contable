import styled from 'styled-components';


export const InfoSect = styled.div`
  background-color: #fff;
  color: var(--black);
  padding:100px 140px;
  width:100%;
  height :100vh;
  position:relative;
  top:65px;  
  border: solid .5px transparent; /* Border transparent is a trick to keep child  well centered */

  @media screen and (max-width: 1000px) {
   padding:100px 80px;
  }
  
  @media screen and (max-width: 850px) {
    padding:0;
  }
  
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 500px) {
    width:100%;
  }

  @media screen and (max-width: 850px) {
   margin: 50vh auto 0;
   transform: translateY(-50%);
  }

`;

export const Column1 = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 850px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content:flex-start;
  }

  @media screen and (min-width: 1600px) {
  display: flex;
  justify-content: flex-end;
}

`;

export const Column2 = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  display:flex;
  justify-content:flex-end;

  @media screen and (max-width: 850px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content:flex-start;
    
  }

  @media screen and (min-width: 1600px) {
  
  display: flex;
  justify-content: flex-start;
}

`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 20px;
  font-size: clamp(0.5em, 3vw, 18px);
 
  @media screen and (max-width: 850px) {
   margin:0 20px;
  }

`;

export const TopLine = styled.div`
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: var(--blue);
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(25px, 5vw, 40px);
  line-height: 1.1;
`;

export const AppOptions = styled.div `
  display:flex;
  align-items:flex-start;
  font-weight:600;
  margin-bottom: 2em;
`

export const SmsTitle = styled.p `
  margin-right: 1.5em;
  padding: 0.5rem 0 ;
  box-shadow:  0 3px var(--blue);
  cursor: pointer;
`

export const ProgramTitle = styled.p `

  padding: 0.5rem 0 ;
  box-shadow: 0 3px transparent;
  cursor:pointer;
  color:gray;
`

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  max-width: 440px;
  margin-bottom: 1.5em;
  line-height: 24px;
`;

export const BtnWrapper = styled.div `
  margin-top: 1rem;
`

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content:center;

  @media screen and (max-width: 850px) {
    max-width: 355px;
    margin:0 20px;
  }

`;

export const ImgApp = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  @media screen and (max-width: 500px) {
    display:none;
    }


`;

