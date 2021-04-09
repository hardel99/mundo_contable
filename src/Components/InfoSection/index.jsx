import React from 'react';
import ImgScreen from '../../images/sms-screen.png'
import {MdTextsms} from "react-icons/md"
import {IconContext} from "react-icons"

import {
  InfoSect,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  AppOptions,
  SmsTitle,
  FreeTrialBtn,
  ProgramTitle,
  Subtitle,
  ImgWrapper,
  ImgApp
  
} from './InfoElements';


function InfoSection() {
  return (
    
      <InfoSect >
        
          <InfoRow>

            <Column1 id= 'column'>
             <IconContext.Provider value={{color: "var(--blue)", size: "clamp(4rem, 5vw, 5.5rem)"}}>
              <TextWrapper>
                <TopLine >Mundo Contable </TopLine>
                <Heading > Nuestras Apps para emprededores </Heading>

                <AppOptions>
                  <SmsTitle>Mundo Textos App</SmsTitle>
                  <ProgramTitle>Programa Contable</ProgramTitle>
               </AppOptions>

                <Subtitle >Automatizamos el proceso de marketing por mensajería con nuestra herramienta 100% online. </Subtitle>
                <MdTextsms/>
              
                  <FreeTrialBtn>Prueba gratis</FreeTrialBtn>
                
              </TextWrapper>
             </IconContext.Provider>
            </Column1>

            <Column2>
              <ImgWrapper >
              <ImgApp  src={ImgScreen} />
              </ImgWrapper>
            </Column2>

          </InfoRow>
        
      </InfoSect>
    
  );
}

export default InfoSection;
