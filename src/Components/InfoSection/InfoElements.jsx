import styled from 'styled-components';


export const InfoSect = styled.div`
  background-color: #fff;
  color: var(--black);
  padding:180px 140px;
  height :100vh;

    
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

`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  /*   border:3px solid black;  */
`;

export const Column1 = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  /*   border:3px solid blue; */

  @media screen and (max-width: 850px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
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
  /*   border:3px solid blue;
 */
  display:flex;
  justify-content:flex-end;

  @media screen and (max-width: 850px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
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

  /*   border:3px solid gold;
 */
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
  /*border: 3px solid gold;*/ 
`;

export const ImgApp = styled.img`
  padding-right: 0;
  /*border: 3px solid red;*/ 
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

