import React from 'react'
import 
{
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroH2,
    HeroP,
    HeroBtn
} from './HeroElements'





const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                   <HeroH1>Mundo Contable</HeroH1>
                    <HeroH2>Te ofrecemos una plataforma global.</HeroH2>
                    <HeroP>Hacemos que sea mas fácil realizar tu contabilidad como empresario o emprendedor.</HeroP>
                    <HeroBtn>Comenzar</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;