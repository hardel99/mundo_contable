import React from "react";
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
} from "./HeroElements";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Mundo Contable</HeroH1>

                    <HeroP>
                        Te ofrecemos una plataforma global y hacemos que sea mas
                        fácil realizar tu contabilidad como empresario o
                        emprendedor.
                    </HeroP>
                    <a href="#servicios">
                        <HeroBtn>Comenzar</HeroBtn>
                    </a>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
