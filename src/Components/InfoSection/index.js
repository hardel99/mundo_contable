import React from 'react';
import ImgScreen from '../../images/sms-screen.png'
import {MdTextsms} from "react-icons/md"
import {IconContext} from "react-icons"

import {
  InfoSect,
  InfoRow,
  InfoColumn,
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

            <InfoColumn>
             <IconContext.Provider value={{color: "var(--blue)", size: "5.5rem"}}>
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
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper >
              <ImgApp  src={ImgScreen} />
              </ImgWrapper>
            </InfoColumn>

          </InfoRow>
        
      </InfoSect>
    
  );
}

export default InfoSection;
