import React from "react";
import styled from "styled-components";
import {BsInstagram} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import {BiMap} from "react-icons/bi";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#FFF5EC;
  @media screen and (min-width: 768px) {
    flex-direction: row;
}
`;
const Left = styled.div`
  flex: 1;
  display: flex; 
  flex-direction: column; 
  padding: 20px; 
  
`;
const Right = styled.div`
  flex: 1;
  padding: 20px; 
`;
const Center = styled.div`
  flex: 1;
  padding: 20px; 
  

`;

const Title = styled.h3`
margin-bottom: 30px; 
`;
const List = styled.ul`
margin: 0; 
padding: 0; 
list-style: none;
display: flex; 
flex-wrap: wrap; 
`;

const ListItem = styled.div`
width: 50%; 
margin-bottom: 10px; 

`;

const Logo = styled.h1`
  flex: 1;
`;
const Description = styled.div`
  flex: 1;
  font-size: 12px; 
  margin: 20px 0px; 
`;
const SocialContainer = styled.div`
  display: flex; 
  flex-direction: row; 
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex; 
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
padding-bottom: 10px; 
`;

const Payment = styled.img`
margin: 20px; 
display: flex; 
align-items: center; 
justify-content: center; 
`; 

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>La Farragua</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore
          molestiae hic laudantium veniam debitis nulla dignissimos alias rerum
          praesentium libero vel illo, inventore nemo soluta sapiente maxime qui
          laboriosam.
        </Description>
        <SocialContainer>
            <SocialIcon color = "DB1C76"><BsInstagram/></SocialIcon>
            
            <SocialIcon color = "1CACDB"><FaTiktok/></SocialIcon>
            </SocialContainer>
      </Left>
      <Center>
        <Title>Recursos</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cesta</ListItem>
            <ListItem>Camisetas W</ListItem>
            <ListItem>Camisetas B</ListItem>
            <ListItem>Accesorios</ListItem>
            <ListItem>ToteBags</ListItem>
            <ListItem>Mi Cuenta</ListItem>
            <ListItem>Rastreo del Pedido</ListItem>
            <ListItem>Lista de Deseos</ListItem>
            <ListItem>Quiénes Somos</ListItem>
            <ListItem>Términos y Condiciones</ListItem>
            <ListItem>Preguntas Frecuentes</ListItem>

            
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem><BiMap style={{marginRight: "5px"}}/>Calle Larios 54, Madrid, 28080</ContactItem>
        <ContactItem><FiPhone style={{marginRight: "5px"}}/>+34 567 893 456</ContactItem>
        <ContactItem><HiOutlineMail style={{marginRight: "5px"}}/>lafarragua@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
