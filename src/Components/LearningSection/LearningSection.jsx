import styled from 'styled-components';
import 'swiper/swiper-bundle.css'



export const LearnSect = styled.div`
    background-color:pink;
    color: var(--black);
    padding:10px 10px;
    width:100%;
    height:100%;
    position:relative;
    border: solid .5px transparent;

    .swiper-container{
        width:600px;
        height:300px;
        padding-top:20px;
    }

    button{
        border:none;
        margin:20px;
        background:none;
    }
    
    .btnEnlace{
        background-color:#ffff;
        color:#000;
        font-size:1em;
        padding:10px;

    }
`;
