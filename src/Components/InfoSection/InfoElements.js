import styled from 'styled-components';


export const InfoSect = styled.div`
  background-color: #fff;
  color: var(--black);
  padding:100px 140px;
  height :100vh;

  @media screen and (max-width: 768px) {
   flex-direction:column;
   padding:100px 80px;
   justify-content:flex-start;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
  font-size: clamp(0.5em, 3vw, 18px);
  margin-right:1rem;


  @media screen and (max-width: 768px) {
  padding-bottom: 65px;
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
  font-size: clamp(32px, 5vw, 40px);
  line-height: 1.1;
`;

export const AppOptions = styled.div `
  display:flex;
  align-items:flex-start;
  font-weight:600;
  margin-bottom: 2em;
`

export const SmsTitle = styled.p `
  margin-right:1.5em;
  padding: 0.5rem 0 ;
  box-shadow:  0 3px var(--blue);
  cursor:pointer;
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
  font-size: 18px;
  line-height: 24px;
`;

export const FreeTrialBtn = styled.button`
 font-size: var(--type-button-size);
 font-weight: bold;
 margin-top:1rem;
 padding: .5rem 1rem;
 display:block;
 border: none;
 border-radius:5px;
 background-color: var(--green);
 color: #fff;
 transition: 0.2s ease-out;
 

 &:hover 
    {
     background-color: #fff;
     color: var(--black);
     border: 3px solid var(--green);
     transition: 0.2s ease-out;
     cursor: pointer;
    }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;


export const ImgApp = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

