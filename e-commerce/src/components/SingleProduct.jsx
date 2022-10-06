import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { VscSearch} from "react-icons/vsc";


const Info = styled.div`
opacity: 0; 
width: 100%; 
height: 100%;
position: absolute; 
top: 0; 
left: 0; 
background-color: rgb(113, 110, 112,0.5); 
z-index: 3; 
display: flex; 
align-items: center; 
justify-content: center; 
transition: all 0.5s ease;   
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center; 
background-color: #ffc300;
position: relative; 
&:hover ${Info}{
opacity: 1; 
}
`;

const Image = styled.img`
height: 75%;
z-index: 2; 
`;
const Circle = styled.div`
width: 200px; 
height: 200px; 
border-radius: 50%;
background-color: #fcf1ed; 
position: absolute; 
`;

const Icon = styled.div`
width: 40px; 
height: 40px; 
border-radius: 50%;
background-color: white; 
display: flex; 
align-items: center; 
justify-content: center; 
margin: 10px; 
transition: all 0.5s ease; 
&:hover{
    background-color: #FF5733 ; 
    transform: scale(1.1)
}
`;
 

const SingleProduct = ({item}) => {
  return (
    <Container>
       <Circle></Circle>
        <Image src={item.img}/>
        <Info>
            <Icon><FaShoppingCart /></Icon>
            <Icon>< VscSearch /></Icon>
            <Icon><AiOutlineHeart/></Icon>
        </Info>
        </Container>
  )
}

export default SingleProduct