import React from 'react'
import ImgBrand from '../../images/salesman-1.jpg'
import SvgDots from '../../images/dots1.svg'
import ReactPlayer from 'react-player'


import {
BrandSect,
DotsBg1,
DotsBg2,
BrandRow,
Column,
ContainerElements,
TextContainer,
TextWrapper,
Title,
Paragraph,
ImgWrapper,
ImgAccounter,
VideoWrapper
} from './BrandElements'

function BrandSection() {
    return (
        <BrandSect>
        <DotsBg1  src={SvgDots} />  
        <DotsBg2  src={SvgDots} />  

        <BrandRow>

        <Column>

    <VideoWrapper>
      <ReactPlayer
        url="https://www.youtube.com/watch?time_continue=4&v=nN_TeQWQGH8&feature=emb_title"
        width="100%"
        height="100%"
        controls
        /*playing <- disabled because it still doesn't play at the correct moment */
        
       
      />
    </VideoWrapper>
    </Column>

        <ContainerElements>

            <TextContainer>
                <TextWrapper>

                    <Title> Hacemos que sea sencillo emprender </Title>
                    <Paragraph>Comprender sus requisitos y objetivos es importante para nosotros.</Paragraph>
                    <Paragraph>Escuchamos y trabajamos juntos para crear una  experiencia verdaderamente única e inolvidable.</Paragraph>

                </TextWrapper>
            </TextContainer>

            <ImgWrapper>
            <ImgAccounter  src={ImgBrand} />
            </ImgWrapper>

        </ContainerElements>

       
        </BrandRow>
        </BrandSect>
    )
}

export default BrandSection


