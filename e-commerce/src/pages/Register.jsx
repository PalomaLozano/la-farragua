import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100vw; 
height: 100vh; 
background: linear-gradient(rgb(255,255,255, 0.5), rgb(255,255,255, 0.1)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
background-size: cover;
display: flex;
align-items: center;  
justify-content: center; 

`;

const Wrapper = styled.div`
width: 40%; 
padding: 20px; 
background-color: white; 

`;

const Title = styled.h1`
font-size: 24px; 
font-weight: 600; 
`;

const Form = styled.form`
display: flex; 
flex-wrap: wrap; 

`;

const Input = styled.input`
flex: 1; 
min-width: 40%; 
margin: 20px 10px 0px 0px; 
padding: 10px; 
`;

const Agreement = styled.span`
font-size: 12px; 
margin: 20px 0px; 
`;

const Button = styled.button`
width: 40%; 
border: none; 
padding: 15px 20px; 
background-color: salmon; 
color: white;
`;



const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crea una cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar contraseña" />
          <Agreement>Al crear una cuenta, acepto el procedimiento de mis datos personales de acuerdo con la <b>Política de Privacidad</b></Agreement>
          <Button>Crear</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
