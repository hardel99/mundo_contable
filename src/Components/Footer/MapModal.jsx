import React from 'react'
import Modal from '../Modal'
import styled from 'styled-components'
import MapaMc from '../../images/mapa_4.svg'
import { FaLocationArrow} from 'react-icons/fa'


export const MapContainer = styled.div`
    width: 100%;
    min-height: 350px;
    overflow: hidden;
    /* ----*/
    position: relative;
    box-shadow: 0 0 25px 1px rgba(0, 0, 0, .3);
    transition: .5s;
    background-color: #555;
    /* ----*/
    
    @media screen and (max-width: 400px)
    {
        min-height: 325px;
    }

    @media screen and (min-width: 1600px)
    {
        min-height: 550px;
    }

    &:after{
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    transform: translate(-150%, -50%);
    background-color: rgba(54, 216, 116, 0.8);
    border-radius: 50%;
    transition: .8s;
    }

    &:hover:after{
        transform: translate(-50%, -50%);
        border-radius: 0;
    }

    img{
    position: absolute;
    height:280%;
    top: 50%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: .8s;
    }

    &:hover img{
      transform: translate(-50%, -50%) scale(1.3) rotate(20deg);
    }

    li{
    font-size: 3rem;
    list-style: none;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-2000px, -50%);
    transition: .6s;
    transition-timing-function: ease-in;
}

    &:hover li{
    transform: translate(-50%, -50%);
    transition-timing-function: ease;
}

a{
    color: #fff;
}
   
`;

export const Direct = styled.p`
 @media screen and (min-width: 1600px)
    {
        font-size: 1.5rem;
    }
`;

export const DirectBox = styled.div`
    margin-top: 20px;
    padding-top: 10px;
    border-top: solid 2px #cccccc;

    @media screen and (min-width: 1600px)
    {
        margin-top: 30px;
        padding-top: 20px;
    }
`;

const MapModal = (props) => {
    return (
        <Modal {...props} title="Ubicación">

            <MapContainer >
                <img src={MapaMc} alt="Mapa" />
                <li>
                 <a href="https://g.page/MundoContables?share" target="_blank"><FaLocationArrow className="iconlocation" /> </a>
                </li>
            </MapContainer>

            <DirectBox >
            <Direct>Colonia Buenos Aires III, Diagonal Centroamericana, Condominios 2000, local B-23, San Salvador, El Salvador.</Direct>
            </DirectBox>

        </Modal>
    )
}

export default MapModal
