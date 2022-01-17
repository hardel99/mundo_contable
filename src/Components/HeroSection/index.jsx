import React, {useEffect, useState, useRef} from "react";
import {
    HeroContainer,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
    SliderButtons,
    PrevArrow,
    NextArrow
} from "./HeroElements";

const Hero = ({ slides }) => {

    const[current, setCurrent] = useState(0)
    const length =slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide =() => {
            setCurrent( current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 2500)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },  [current, length]
    );

    const nextSlide = () => {

        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)

        //console.log(current)
    };

    const prevSlide = () => {
        
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current -1)

        //console.log(current)
    }

    if (!Array.isArray(slides) || slides-length <= 0) {
        return null
    }



    return (
        <HeroContainer>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            
                            {index==current &&(
                                <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />

                                <HeroItems>
                                    <HeroH1> {slide.title} </HeroH1>
                                    <HeroP> {slide.paragraph} </HeroP>
                                    <a href="#servicios">
                                    <HeroBtn > Comenzar </HeroBtn>
                                    </a>
                                </HeroItems>

                            </HeroSlider>
                            )}
                            
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} /> 
                    <NextArrow onClick={nextSlide} /> 
                </SliderButtons>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;
