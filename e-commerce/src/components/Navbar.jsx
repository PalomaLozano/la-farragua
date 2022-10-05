import React from "react";
import styled from "styled-components";
import { VscSearch} from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";

//import Logo from "../assets/small-logo.png";
const Container = styled.div`
background-color: black;
color: black;
@media screen and (min-width: 768px) {
}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  padding-right: 5px;
  color: white;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  

  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`;

const Input = styled.input`
border: none;
height:10px;
width: 45px;
outline: none;
border: 0.5px solid grey;
border-radius: 3px;

@media screen and (min-width: 768px) {
  margin-left: 25px;
  width: 80px;
}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 800;
  color: white;
  font-size: 12px;
`;

const Right = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-end;
@media screen and (min-width: 375px) {
  flex:1;
}

`;

const MenuItem = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
padding-left:10px;
align-items:center;
font-size:12px;
cursor:pointer;
color: white;
@media screen and (min-width: 768px) {
  padding-left:20px;
}
`;

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>ES</Language>
        <SearchContainer>
          <Input />
          <VscSearch/>
        </SearchContainer>
      </Left>

      <Center>
        <Logo>La Farragua</Logo>
      </Center>

      <Right>
      <MenuItem>Únete</MenuItem>
        <MenuItem>Iniciar sesión</MenuItem>
      </Right>
      <MenuItem>
          <FaShoppingCart />
      </MenuItem>
    </Wrapper>
    </Container>
  );
};

export default Navbar;
