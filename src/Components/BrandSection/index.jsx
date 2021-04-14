import React from 'react'
import ImgBrand from '../../images/salesman-1.jpg'
import SvgDots from '../../images/dots1.svg'


import {
BrandSect,
DotsBg1,
DotsBg2,
BrandRow,
Column,
VideoWrapper,
ContainerElements,
TextContainer,
TextWrapper,
Title,
Paragraph,
ImgWrapper,
ImgAccounter
} from './BrandElements'

function BrandSection() {
    return (
        <BrandSect>
        <DotsBg1  src={SvgDots} />  
        <DotsBg2  src={SvgDots} />  

        <BrandRow>
        <VideoWrapper>
            <iframe src="https://www.youtube.com/embed/nN_TeQWQGH8?autoplay=1" width="620" height="380" frameborder="0"></iframe>
        </VideoWrapper>

        <Column>

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

        </Column>
        </BrandRow>
        </BrandSect>
    )
}

export default BrandSection



