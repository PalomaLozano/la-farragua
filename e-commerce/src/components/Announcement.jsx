import React from 'react';
import styled from "styled-components";

const Container = styled.div`
height: 15px;
background-color: #581845;
color: white;
font-size: 10px;
text-align:center;
justify-content:center;
padding:3px;

`;

const Text = styled.p`

`;
const Announcement = () => {
  return (
    <Container>
      <Text>¡Atención! Envío gratis a partir de 30€</Text>
      </Container>
  )
}

export default Announcement