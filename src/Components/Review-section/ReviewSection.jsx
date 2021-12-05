import React from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "./Review.css";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

function ReviewSection() {
    return (
        /* Slider main container */
        <div class="swiper">
            {/* Additional required wrapper*/}
            <div class="swiper-wrapper">
                {/*Slides*/}
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    );
}
export default ReviewSection;
