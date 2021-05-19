import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import {LearnSect, SwiperBtnLink} from "./LearningSection";

SwiperCore.use([Navigation]);

function card({tittle, image, body}){}

function LearningSection(){
    
    return(
        <LearnSect>
                <button className='BtnGraduates'> Diplomados </button>
                <button className='BtnEvents'> Eventos</button>
               <Swiper
                    navigation={{
                    prevEl: '.BtnGraduates',
                    nextEl: '.BtnEvents',
                    }}> {/* Slider main container */}
                     <SwiperSlide>
                            <h1>Ofrecemos diplomados profecionales</h1>
                            <p>Contamos con la modalidad de Cursos Online y
                                te brindamos todo lo que necesitas para iniciar
                                y potenciar tu proyecto.
                            </p>
                            <SwiperBtnLink>
                                <a>Plataforma de cursos</a>
                            </SwiperBtnLink>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>Slide de Eventos</h1>
                        </SwiperSlide>
               </Swiper>
        </LearnSect>
    )
}

export default LearningSection;