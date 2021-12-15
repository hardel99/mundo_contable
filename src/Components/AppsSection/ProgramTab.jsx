import React from 'react'
import ImgScreen2 from '../../images/squares-woman.svg'
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

const ProgramTab = () => {
    return (
        <>
            <InfoRow>

                <Column1 id='column'>
                    <TextWrapper>
                        <Data>
                            <Subtitle >Obtén un sistema contable fácil de usar desde donde te encuentres, a tan solo un clic.</Subtitle>
                            <BtnWrapper>
                                <Btn>Mas información</Btn>
                            </BtnWrapper>
                        </Data>
                    </TextWrapper>
                </Column1>

                <Column2>
                    <ImgWrapper >
                        <ImgApp src={ImgScreen2} />
                    </ImgWrapper>
                </Column2>

            </InfoRow>
        </>
    )
}
export default ProgramTab