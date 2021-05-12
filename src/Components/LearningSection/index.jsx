import React from 'react';
import Swiper from 'swiper';
import {LearnSect} from "./LearningSection";
import SwiperCore, { Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper();

function LearningSection(){
    return(
        <LearnSect>
               <div class="swiper-container"> {/* Slider main container */}
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">silde de diplomas</div>
                        <div class="swiper-slide">silde de eventos</div>
                    </div>
               </div>
        </LearnSect>
    )
}

export default LearningSection;