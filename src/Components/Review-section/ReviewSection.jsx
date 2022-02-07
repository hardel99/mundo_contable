import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
import { Avatar } from "@material-ui/core";
import fondo from "../../images/waves.svg";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

//Buttons of Prev/Next slide...
const PreviusBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: " rgb(38 58 129)", fontSize: "45px" }} />
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "rgb(38 58 129)", fontSize: "45px" }} />
        </div>
    );
};

//Slide section
const ReviewSection = () => {
    return (
        <div
            className="testimonial"
            style={{
                background: `url(${fondo})`,
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 0,
                padding: 20,
                paddingBottom: 100,
            }}
        >
            <div
                style={{
                    width: "50%",
                    textAlign: "center",
                    paddingTop: 20,
                    paddingBottom: 50,
                    background: "#3f8db991",
                    borderRadius: 20,
                }}
            >
                <h1
                    style={{
                        marginBottom: 50,
                        fontfamily: "Nunito Sans",
                        color: " #2e2e36",
                        padding: 5,
                    }}
                >
                    {" "}
                    Lo que la gente piensa de nuestros servicios{" "}
                </h1>
                <Slider prevArrow={<PreviusBtn />} nextArrow={<NextBtn />} dots autoplay={{ autoplaySpeed: 2000 }}>
                    <CardFirst img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                    <CardSecond img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                    <CardThird img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                    <CardFourth img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                    <CardFifth img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                </Slider>
            </div>
        </div>
    );
};

//This is each text comment in the section
const CardFirst = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Me encanta"</p>
            <p>Les animo a que sigan trabajando de esta manera. Pensando en el cliente es como se camina hacia el exito prefesional</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Roxana Martinez
                </span>
                , Contadora
            </p>
        </div>
    );
};
const CardSecond = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Estamos Felices"</p>
            <p>
                Decidimos confiar nuestro asesoramiento fiscal y contable a MUNDO CONTABLES, nunca pensamos el acierto y las ventajas que nos iba a aportar el contar con un grupo
                profesional tan eficaz.
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Tony Antony
                </span>
                , CEO
            </p>
        </div>
    );
};
const CardThird = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: "20px 20px 20px",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Muy agradecido"</p>
            <p>Es perfecto para una pyme, ya que no existen barreras de inversion para adoptar esta solucion.</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Melisa Ferdinand
                </span>
                , Sales Manager
            </p>
        </div>
    );
};
const CardFourth = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Muy profesionales"</p>
            <p>El sistema de Mundo Contables es una oferta competitiva en cuanto a funcionalidad, flexibilidad y escalabilidad.</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Jessica Sutton
                </span>
                , Web Designer
            </p>
        </div>
    );
};
const CardFifth = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Un Sistema Confiable"</p>
            <p>
                La implantacion del sistema de gestion empresarial nos permitio aumentar la calidad y seguridad de lainformacion, generar informes con mayor oportunidad, disminuir
                costos por la reduccion de operaciones y papeleria.
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Mark Adams, Web Developer
                </span>
                , Web Developer
            </p>
        </div>
    );
};
const CardSixt = (img) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "#16191c",
                padding: 10,
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid grey",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>"Talleres Profesionales Online"</p>
            <p>Gracias por el curso! Durante el fin de semana he estado releyendo los apuntes e intentando aplicar los recomendaciones.</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span
                    style={{
                        fontWeight: 500,
                        color: " rgb(38 58 129)",
                    }}
                >
                    Scarlett Hugo
                </span>
                , CEO
            </p>
        </div>
    );
};
export default ReviewSection;
