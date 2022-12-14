import React from 'react'
import styled from 'styled-components'
import { MdCategory} from "react-icons/md";
import {categories} from "../data";

const Container = styled.div`
flex:1;
margin: 3px; 
height: 45vh;
position: relative;
@media screen and (min-width: 768px) {
  height: 70vh;
  }
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 

`;
const Title = styled.h1`
color: whitesmoke; 
margin-bottom: 20px; 
font-size: 13px;
text-align: center;
@media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const Button = styled.button`
border: none;
padding: 10px; 
background-color: white; 
color: gray; 
cursor: pointer; 
font-weight: 600; 
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Comprar</Button>
        </Info>
        </Container>
  )
}

export default CategoryItem