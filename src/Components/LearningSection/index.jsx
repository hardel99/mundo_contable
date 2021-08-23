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
import image from "../../images/salesman-2.jpg";
import { LearnSect } from "./LearningSection";

SwiperCore.use([Navigation]);

const TextContainer = styled.div`
    border: 1px solid red;
    text-align: center;
`;
const CardContainer = styled.div`
    display: flex;
    margin: 20px;
    border: 1px solid blue;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

//Aqui van las cards
const useStyles = makeStyles({
    root: {
        maxWidth: "90%",
        boxShadow: "0 3px 5px 2px rgba(65, 65, 66, 0.11)",
        margin: 20,
        border: "1px solid green",
    },

    media: {
        height: 150,
        backgroundSize: "100% 100%",
    },

    swiper: {
        display: "flex",
        flexDirection: "column",
    },
});

//This is part just of a button to show plans

const StyledButton = withStyles({
    root: {
        background: "grey",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 40,
        padding: "0 30px",
        width: 300,
        alignSelf: "center",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
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
                {/* Slider main container */}
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
                <SwiperSlide className={classes.swiper}>
                    <h1>Slide de Eventos</h1>
                </SwiperSlide>
            </Swiper>
        </LearnSect>
    );
}

export default LearningSection;
