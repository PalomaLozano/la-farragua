import React from 'react'
import styled from 'styled-components'
import {IoSend} from "react-icons/io5";



const Container = styled.div`
height:60vh; 
background-color: whitesmoke; 
display: flex; 
align-items: center; 
justify-content: center;
flex-direction: column;  
` ; 
const Title = styled.h1`
font-size:40px; 
margin-bottom:20px; 
@media screen and (min-width: 768px) {
  font-size:70px;
}
`;
const Description = styled.p`
text-align: center; 
font-size: 16px; 
font-weight: 300; 
margin-bottom: 20px; 
@media screen and (min-width: 768px) {
  font-size:24px; 
}
` ; 
const InputContainer = styled.div`
width: 50%; 
height: 30px; 
background-color: white; 
display: flex; 
justify-content: space-between; 
border: 1px solid lightsalmon; 
` ; 
const Input = styled.input`
border: none; 
text-align: center;
flex: 8; 

@media screen and (min-width: 768px) {
  padding-left: 20px; 
 
}
` ; 
const Button = styled.button`
flex: 1; 
justify-content: center; 
align-items: center; 
border: none; 
background-color: lightsalmon; 
color: white; 
` ; 
const Send = styled.div`` ; 

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Ponte al día de tus productos favoritos, historias, descuentos y promociones.</Description>
        <InputContainer>
        <Input placeholder='Email'/>
        <Button>
          <IoSend/>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter