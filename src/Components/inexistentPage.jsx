import React from "react";
import styled from "styled-components";
import sample from "./../images/404.jpg";

const Container = styled.div`
    text-align: center;
    margin-top: 50px;

    h1 {
        font-size: 84pt;
    }
`;

export default function NotFound() {
    return (
        <Container>
            <h1>404 Not Found</h1>
            <br />
            <br />
            <br />
            <br />
            <h2>
                Cliente: que paso con esta pagina? crei que ya la teniamos lista
            </h2>
            <br />
            <h2>Los devs y el server:</h2>
            <img src={sample} alt={""} />
        </Container>
    );
}
