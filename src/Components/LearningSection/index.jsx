import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import {LearnSect} from "./LearningSection";

SwiperCore.use([Navigation]);

function LearningSection(){

    
    return(
        <LearnSect>
                <button className='btnDiplomados'> Diplomados </button>
                <button className='btnEventos'> Eventos</button>
               <Swiper
                    navigation={{
                    prevEl: '.btnDiplomados',
                    nextEl: '.btnEventos',
                    }}> {/* Slider main container */}
                     <SwiperSlide>
                            <h1>Ofrecemos diplomados profecionales</h1>
                            <p>Contamos con la modalidad de Cursos Online y
                                te brindamos todo lo que necesitas para iniciar
                                y potenciar tu proyecto.
                            </p>
                            <button class="btnEnlace">
                                <a>Plataforma de cursos</a>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>Slide de Eventos</h1>
                        </SwiperSlide>
               </Swiper>
        </LearnSect>
    )
}

export default LearningSection;