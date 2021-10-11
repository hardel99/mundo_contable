import React from 'react'
import styled from 'styled-components';
import LogoBinyapi from '../../images/logo-binyapi.png';
import LogoJvm from '../../images/logo-jvm.png';
import LogoMachuca from '../../images/logo-machuca.png';
import LogoMega from '../../images/logo-megapro.png';
import useModal from '../Hooks/useModal';
import Modal from '../Modal.jsx'

export const AboutSect = styled.div`
  background-color: var(--blue-dark);
  color: #fff;
  padding:100px 140px;
  width:100%;
  height: calc(100vh-80px);
  position:relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1300px) {
   padding:100px 80px;
  }
  
  @media screen and (max-width: 1200px) {
    padding:50px 20px;
  }
  
`

export const MainContainer = styled.div`
width: 100%;
`;

export const Title = styled.h1`
padding-bottom : 20px;
`;

export const AboutP = styled.p`
font-size: 1em;
padding-bottom : 20px;
/* color: ${props => props.theme.accent};  */
li {
    width: 300px;
    margin-bottom: 1rem;
  }

a{
    filter: opacity(50%);
    color: var(--accent-dark);
    text-decoration: none;
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover{
        filter: opacity(100%);
    }
}`;

export const HistoryContainer = styled.div`
width: 420px;
margin-right: 40px;

@media screen and (min-width: 1580px){
    margin-right: 50px;
}

@media screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px;
  }

`;

export const TextContainer = styled.div`
width:100%;
height: 340px;
display: flex;
justify-content: space-between;

@media screen and (min-width: 1580px){
    justify-content:center;
}

@media screen and (max-width: 1200px) {
    height: auto;
    justify-content: flex-start;
    flex-direction: column;
}`;

export const LiContainer = styled.div`
width:700px;
height: 100%;
display: flex;
align-items: flex-start;


ul{
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}

li{
margin-right: 40px;
margin-bottom: 20px;
padding:5px;

}

@media screen and (min-width: 1580px){
    margin-left: 50px;
}

@media screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px;
    margin-left: 20px;


    li{
        width: 90%;
        padding:10px;
        
    }

  }

  @media screen and (max-width: 425px) {


    ul{
       columns: 1;
       -webkit-columns: 1;
       -moz-columns: 1;
    }

}`;

export const Logo = styled.img`
filter: grayscale(80%);
height:80px;
padding: 10px;
margin-right: 80px;
cursor: pointer;
transition:0.3s ease-out;
&:hover {
    filter: grayscale(0%);
}

@media screen and (max-width: 1200px) {
    margin-right: 20px;
    margin-bottom: 20px;
}

@media screen and (max-width: 425px) {
    height:70px;
}`;

export const LogoContainer = styled.div`
padding:20px;

@media screen and (min-width: 1580px){
    text-align: center;
}`;



const AboutSection = () => {
    const [isOpenAboutModal, openAboutModal, closeAboutModal] = useModal();

    return (
        <>
            <AboutSect id="nosotros">
                <MainContainer>
                    <TextContainer>

                        <HistoryContainer>
                            <Title>Nosotros</Title>
                            <AboutP>
                                Somos una empresa comprometida con el
                                crecimiento y desarrollo de muchos
                                profesionales vulnerables en esta sociedad
                                competitiva, estamos apostando al desarrollo
                                de los profesionales, proporcionándoles las
                                herramientas necesarias para disminuir las
                                dificultadas que involucra emprender en un
                                país como el nuestro.
                            </AboutP>

                            <AboutP>
                                <a href="#nosotros" onClick={openAboutModal}>Mas información +</a>
                                <Modal
                                    isOpen={isOpenAboutModal}
                                    closeModal={closeAboutModal}
                                    title="Mundo Contable"
                                >
                                    <div className="scroll-div">
         

                                    <div className="banner-container" />

                                    <p className="pmodal">
                                        Creada con el fin de contribuir en el desarrollo  contable, administrativo y Legal,  para muchos
                                        jóvenes profesionales emprendedores, que  debido a las  diferentes limitaciones se les dificulta
                                        emprender y empezar a ofrecer sus  servicios profesionales.
                                    </p>

                                    <p className="pmodal">
                                        Es el inicio para empezar a hacerte de tu propia cartera de clientes.
                                    </p>

                                    <p className="pmodal">
                                        En una economía globalizada los profesionales que logren trascender en los cambios son los que
                                        más se adaptan y llegan primero a cubrir las necesidades futuras de las empresas.
                                    </p>

                                    <p className="pmodal">
                                        Sabemos de los profesionales que creen en sí mismos más que en una empresa y logran ofrecer un servicio
                                        integral, con el propósito de focalizar los recursos de su negocio.
                                    </p>

                                    <p className="pmodal">
                                        Apuéstale a tu libertad Financiera, ya que estamos conscientes que  de tu crecimiento depende de
                                        nosotros como empresa, estaremos  contigo desde el inicio hasta el momento que tus expectativas
                                        superen lo que se te ofrece y logres crear tu propia empresa y te asesoraremos para ello.
                                    </p>
                                    </div>

                                </Modal>
                            </AboutP>


                        </HistoryContainer>


                        <AboutP>
                            <LiContainer>
                                <ul>
                                    <li>Habilidad de proveer servicios
                                        materializándolos  en una relación
                                        basada en el compromiso, la
                                        credibilidad  y la atención
                                        personalizada.
                                    </li>

                                    <li>Sabemos que nuestro éxito
                                        depende del éxito de cada uno
                                        de nuestros clientes.
                                    </li>

                                    <li>Entrega de valor agregado a
                                        nuestros servicios.
                                    </li>

                                    <li>Metodología orientada a las
                                        necesidades e intereses
                                        del cliente.
                                    </li>

                                    <li>Utilización de modernos
                                        recursos tecnológicos.
                                    </li>
                                </ul>
                            </LiContainer>

                        </AboutP>
                    </TextContainer>
                    <LogoContainer>
                        <Title >Empresas Aliadas</Title>
                        <Logo src={LogoBinyapi} alt="logo" />
                        <Logo src={LogoMachuca} alt="logo" />
                        <Logo src={LogoJvm} alt="logo" />
                        <Logo src={LogoMega} alt="logo" />
                    </LogoContainer>
                </MainContainer>
            </AboutSect>


        </>
    )
}

export default AboutSection

{/*function Panel() {

    const [MostrarPanel, setMostrarPanel] = useState(false);

    return (
        <>
        {MostrarPanel && <div className="Panel" >No hay todavia</div> }
        {MostrarPanel && 
        ReactDOM.createPortal(
            <div className="Panel"> No hay todavia </div>, 
            document.querySelector('#portal')
        )}
        <button onClick={() => setMostrarPanel(!MostrarPanel)} >Mas informacion +</button>
        </>
    );
}*/}
