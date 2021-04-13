import React from 'react'
import ImgBrand from '../../images/salesman-1.jpg'


import {
BrandSect,
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
        <BrandRow>
        <Column>

        <VideoWrapper>
            <iframe src="https://www.youtube.com/embed/nN_TeQWQGH8?autoplay=1" width="620" height="380" frameborder="0"></iframe>
        </VideoWrapper>

        <ContainerElements>

            <TextContainer>
                <TextWrapper>
                    <Title> Hacemos que sea sencillo emprender </Title>
                    <Paragraph>Comprender sus requisitos y objetivos es importante para nosotros. <br/>
                    Escuchamos y trabajamos juntos para crear una  experiencia verdaderamente única e inolvidable.
                    </Paragraph>
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



