import styled from "styled-components";
import "swiper/swiper-bundle.css";

export const LearnSect = styled.div`
    background-color: #ddd;
    color: var(--black);
    padding: 10px 10px;
    width: 100%;
    min-height: 100vh;

    .BtnGraduates {
        border: none;
        margin: 20px;
        background: none;
        cursor: pointer;

        @media (max-width: 768px) {
            display: inline-block;
        }

        @media (min-width: 1080px) {
            margin-top: 40px;
            font-size: 1em;
        }
    }

    .BtnEvents {
        border: none;
        margin: 20px;
        background: none;
        cursor: pointer;

        @media (max-width: 768px) {
            display: inline-block;
        }

        @media (min-width: 1080px) {
            margin-top: 40px;
            font-size: 1em;
        }
    }
`;
