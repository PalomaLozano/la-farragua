import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0.1)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: salmon;
  color: white;
  margin-bottom: 10px; 
  border-radius: 10px; 
`;

const Link = styled.a`
margin: 5px 0px; 
font-size:12px; 
text-decoration: underline; 
cursor: pointer; 

`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesión</Title>
        <Form>
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Contraseña" />
          <Button>Entrar</Button>
          <Link>¿Has olvidado tu contraseña?</Link>
          <Link>Crear una cuenta nueva</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
