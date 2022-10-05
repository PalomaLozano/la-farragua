import React from 'react';
import styled from "styled-components";

const Container = styled.div`
height: 15px;
background-color: #900C3F;
color:white;
font-size: 10px;
text-align:center;
justify-content:center;
padding:3px;

`
const Announcement = () => {
  return (
    <Container>¡Atención! Envío gratis a partir de 30€</Container>
  )
}

export default Announcement