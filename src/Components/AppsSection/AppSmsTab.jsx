import React from 'react'
import ImgScreen from '../../images/sms-screen.png'
import {Btn} from "../ButtonElement"
import 
{
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Data,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  ImgApp, 
} from "./TabsStyle"

export const AppSmsTab = () => {
    return (
        <>        
          <InfoRow>

            <Column1 id= 'column'>
              <TextWrapper>
                <Data>
                  <Subtitle >Automatizamos el proceso de marketing por mensajería con nuestra herramienta 100% online. </Subtitle>
                    <BtnWrapper>
                  <Btn>Prueba gratis</Btn>
                  </BtnWrapper>      
                </Data>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrapper >
              <ImgApp  src={ImgScreen} />
              </ImgWrapper>
            </Column2>

          </InfoRow>
        </>
    );
}
