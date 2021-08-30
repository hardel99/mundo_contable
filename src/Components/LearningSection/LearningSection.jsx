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
    }

    .BtnEvents {
        border: none;
        margin: 20px;
        background: none;
        cursor: pointer;

        @media (max-width: 768px) {
            display: inline-block;
        }
    }
`;
