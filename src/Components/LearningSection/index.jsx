import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./index.css";
import image from "../../images/entrepeneurs.jpg";
import { LearnSect } from "./LearningSection";

SwiperCore.use([Navigation]);

const TextContainer = styled.div`
    text-align: center;

    @media (min-width: 180px) {
        font-size: 1.5em;
    }
`;
const CardContainer = styled.div`
    display: flex;
    margin: 20px;
    margin-top: 50px;
    justify-content: center;
    pointer-events: none;

    @media (max-width: 1400px) {
        display: flex;
        margin: 20px;
        margin-top: 50px;
        justify-content: center;
        pointer-events: none;
    }

    @media (min-width: 1080px) {
        margin-top: 80px;
    }

    @media (max-width: 768px) {
        width: 95%;
        flex-direction: column;
    }
`;

const GalleryContariner1 = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
    }

    @media (max-width: 1040px) and (min-width: 768px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
        grid-gap: 10px;
    }
`;

const GalleryContariner2 = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
        grid-gap: 10px;
        margin: 20px;
    }
`;

//Aqui van las cards
const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        minWidth: "19vw",
        boxShadow: "0 3px 5px 2px rgba(7, 7, 150, 0.15)",
        margin: 20,

        //Containers to frist slide with standard screen
        ["@media (max-width: 768px)"]: {
            minWidth: "60vw",
            margin: 7,
        },
    },
    //Images in the card
    media: {
        height: "27vh",
        backgroundSize: "100% 100%",

        //Screan to 1040px size
        ["@media (max-width: 1040px)"]: {
            minWidth: "50vw",
        },
    },

    //This is the container of images from to secod slide
    container: {
        maxWidth: "100%",
        minWidth: "17vw",
        margin: 20,
        boxShadow: "0 3px 5px 2px rgba(7, 7, 150, 0.15)",

        // Screen to standard mobile
        ["@media (max-width: 768px)"]: {
            minWidth: "60vw",
            margin: 7,
        },

        // Specific screen to Tablets and Ipads.
        ["@media (max-width: 1040px) and (min-width:768px)"]: {
            minWidth: "40vw",
            margin: 10,
        },
    },
    //Images of second slide
    gallery: {
        height: "25vh",
        backgroundSize: "cover",

        //Screen to standard mobile
        ["@media (max-width: 768px)"]: {
            height: "40vw",
        },
    },
    //Settings of swiper
    swiper: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
    },
});

//Button: "Show plans"

const StyledButton = withStyles({
    root: {
        background: "grey",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 40,
        padding: "0 30px",
        marginTop: 40,
        marginBottom: 20,
        width: 300,
        alignSelf: "center",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",

        ["@media (max-width: 768px)"]: {
            width: "95%",
        },

        ["@media (min-width: 1080px)"]: {
            marginTop: 80,
            width: "15vw",
            height: "4.5vh",
        },
    },
    label: {
        textTransform: "capitalize",
    },
})(Button);

//*************

function LearningSection() {
    const classes = useStyles();
    const btnLink = withStyles();

    return (
        <LearnSect>
            <div id="btns-learn">
                <button className="BtnGraduates"> Diplomados </button>
                <button className="BtnEvents"> Eventos</button>
            </div>
            <Swiper
                className="swiperContainer"
                navigation={{
                    prevEl: ".BtnGraduates",
                    nextEl: ".BtnEvents",
                }}
            >
                {" "}
                {/* First slider: Plans section*/}
                <SwiperSlide className={classes.swiper}>
                    <TextContainer>
                        <h1>Ofrecemos diplomados profecionales</h1>
                        <p>
                            Contamos con la modalidad de Cursos Online y te brindamos todo lo que necesitas para iniciar
                            y potenciar tu proyecto.
                        </p>
                    </TextContainer>
                    <CardContainer>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={image} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Diplomado de Innovacion Contable Profecional
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={image} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Diplomado de Innovacion Contable Empesarial
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={image} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Diplomado de Innovacion Contable Emprededores
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={image} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Diplomado en creacion aula virtual Moodle
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </CardContainer>
                    <StyledButton className={btnLink} color="primary" variant="contained" disableElevation>
                        Plataforma de cursos
                    </StyledButton>
                </SwiperSlide>
                {/** Second Slider: Galery section */}
                <SwiperSlide className={classes.swiper}>
                    <GalleryContariner1>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                    </GalleryContariner1>
                    <GalleryContariner2>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                        <Card className={classes.container}>
                            <CardActionArea>
                                <CardMedia className={classes.gallery} image={image} />
                            </CardActionArea>
                        </Card>
                    </GalleryContariner2>
                </SwiperSlide>
            </Swiper>
        </LearnSect>
    );
}

export default LearningSection;
