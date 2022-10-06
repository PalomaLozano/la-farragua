import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden; 
  //background-color: #ffc300;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  color: #900c3f;
  //background-color: #900c3f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease; 
  transform: translateX(${props => props.slideIndex * -100}vw)


`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
  flex: 1;
 //height: 100%auto;
`;

const Image = styled.img`
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;
const Description = styled.p`
  margin: 10px 0px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  @media screen and (min-width: 768px) {
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
  }
`;
const Button = styled.button`
  padding: 2px;
  font-size: 15px;
  border: 2px solid #900C3F; 
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 10px;
    font-size: 20px;
  }
`;

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{

    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);

    }else {
      setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0);
    }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <BsArrowLeftCircle />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) =>(
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>Ver más</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <BsArrowRightCircle />
      </Arrow>
    </Container>
  );
};

export default Slider;
