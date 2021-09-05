import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";

const PlanContainer = styled.div`
    width: 100%;
    //transform: scale(0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    font-family: "NotoSans", sans-serif;

    @media (max-width: 768px) {
        padding: 30px 0px;
    }
`;

const HeroText = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        text-align: center;
        line-height: 1.2;
    }

    @media (max-width: 320px) {
        font-size: 2rem;
        line-height: 1.3;
    }
`;

const Subtitle = styled.p`
    font-size: 20px;
    font-weight: normal;
    line-height: 1.3;
    max-width: 600px;
    text-align: center;
    margin: 25px;

    @media (max-width: 768px) {
        font-size: 17px;
        width: 240px;
        text-align: justify;
    }

    @media (max-width: 320px) {
        font-size: 15px;
        text-align: center;
    }
`;

const CardContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 100%;
    }
`;

const Bullet = styled.span`
    color: #737373;
    text-align: left;
    line-height: 1.63;
    margin: 8px;
    font-size: 16px;
    font-weight: 500;
`;

const BulletCont = styled.div`
    display: flex;
`;

const Price = styled.span`
    display: block;
    color: #01bc9a;
    font-size: 40px;
    line-height: 1.25;
    font-weight: bold;
    text-align: center;
    font-family: "NotoSans", sans-serif;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        backgroundColor: "#f6f6fb",
        margin: "20px 50px",
        boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.16)",
        padding: "0px 25px 20px 10px",

        // eslint-disable-next-line
        ["@media (max-width: 1024px)"]: {
            maxWidth: 340,
        },

        // eslint-disable-next-line
        ["@media (max-width: 320px)"]: {
            maxWidth: 270,
            margin: "5px 10px",
            marginBottom: 20,
            padding: 0,
        },
    },
    title: {
        fontSize: 32,
        color: "#3d3d3d",
        fontWeight: "bold",
        lineHeight: 1.31,

        // eslint-disable-next-line
        ["@media (max-width: 768px)"]: {
            padding: "0px 0px 0px 15px",
            fontSize: 25,
        },

        // eslint-disable-next-line
        ["@media (max-width: 320px)"]: {
            padding: 0,
            fontSize: 25,
        },
    },
    check: {
        width: 20,
        height: 20,
        padding: "10px 3.3px 5.8px",
    },
    sub: {
        fontSize: 18,
        lineHeight: 1.33,
        textAlign: "center",
        color: "#000",
        margin: "15px 0px 30px 0px",

        // eslint-disable-next-line
        ["@media (max-width: 768px)"]: {
            margin: 12,
            padding: "0px 0px 0px 15px",
        },

        // eslint-disable-next-line
        ["@media (max-width: 320px)"]: {
            margin: "12px",
            padding: 0,
        },
    },
});

export default function PlanSection() {
    const classes = useStyles();
    const check = <span className={classes.check}>✓</span>;

    return (
        <PlanContainer>
            <HeroText>Escoge el plan correcto para ti</HeroText>
            <Subtitle>
                Planes ideales para los usuarios que quieren realizar el <br />
                cálculo de los impuestos y realizar una contabilidad más completa.
            </Subtitle>
            <CardContainer>
                <Card className={classes.root} id="emprendedores">
                    <CardContent>
                        <h2 className={classes.title}>Emprendedores</h2>
                        <p className={classes.sub}>Modulos basicos</p>
                        <Price>$50</Price>
                        <BulletCont>
                            {check} <Bullet>Modulo IVA</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check} <Bullet>Modulo Contabilidad</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check} <Bullet>Asistencia Remota</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Asesoría y capacitación de 6 horas para la utilización del sistema</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Solicita precio o financiamientos según tu capacidad económica</Bullet>
                        </BulletCont>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <h2 className={classes.title}>Profesionales</h2>
                        <p className={classes.sub}>Modulos basicos</p>
                        <Price>$100</Price>
                        <BulletCont>
                            {check}
                            <Bullet>Capacidad de llevar hasta 999 empresas</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Asignación de usuarios y claves para cada cuenta</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Asesoría y capacitación en el uso del sistema</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet> Asistencia Remota</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Financiamiento con tasa 0% hasta 6 meses</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Módulo de cuentas por cobrar.</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Módulo de Facturación.</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Módulo de Inventario.</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Módulo de Compras.</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Módulo de cuentas por cobrar</Bullet>
                        </BulletCont>
                        <BulletCont>
                            {check}
                            <Bullet>Además: Gestión de clientes para cobranza y ventas.</Bullet>
                        </BulletCont>
                    </CardContent>
                </Card>
            </CardContainer>
        </PlanContainer>
    );
}
