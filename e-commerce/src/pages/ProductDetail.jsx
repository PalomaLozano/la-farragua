import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {MdOutlineRemoveCircleOutline} from "react-icons/md";
import {MdAddCircleOutline} from "react-icons/md";


const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
display: flex; 
`;

const ImgContainer = styled.div`
flex: 1; 

`;
const InfoContainer = styled.div`
flex: 1; 
padding: 0px 50px; 
`;

const Image = styled.img`
width: 100%; 
height: 90vh; 
object-fit: cover; 

`;

const Title = styled.h1`
font-weight: 200;
`;
const Description = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;

`;

const FilterContainer = styled.div`
width: 50%; 
margin: 30px 0px; 
display: flex; 
justify-content: space-between; 

`;

const Filter = styled.div`
display: flex; 
align-items: center; 
`;

const FilterTitle = styled.span`
font-size: 20px; 
font-weight: 200; 
`;

const FilterColor = styled.div`
width: 20px; 
height: 20px; 
border-radius: 50%; 
background-color: ${props=>props.color};
margin: 0px 5px; 
cursor: pointer; 
`;

const FilterSize = styled.select`
margin-left: 10px; 
padding: 5px; 
border: 1px solid salmon; 
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`

`;
const AmountContainer = styled.span`
display: flex;
flex-direction: row; 

`;

const Remove = styled.div`
padding-top: 8px; 
cursor: pointer ;
`;

const Amount = styled.span`
width: 30px; 
height: 30px; 
border-radius: 10px; 
border: 1px solid salmon; 
display: flex; 
align-items: center; 
justify-content: center; 
margin: 0px 5px; 

`;

const Add = styled.div`
padding-top: 8px; 
cursor: pointer ;
`;

const Button = styled.button`
margin-top: 20px;
padding: 15px; 
border: 1px solid salmon; 
border-radius: 10px; 
background: salmon; 
cursor: pointer; 
color: white; 
&:hover{
background-color: #FFA777;
}
`;



const ProductDetail = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            expedita corrupti facilis sequi optio debitis saepe vero quas
            placeat perferendis? Provident perferendis error voluptatibus
            repudiandae sit impedit dolorum porro aut?
          </Description>
          <Price>20€</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="grey"/>
                <FilterColor color="darkblue"/>
            </Filter>
            <Filter>
                <FilterTitle>Talla</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                
                <Remove>
            <MdOutlineRemoveCircleOutline/>
            </Remove>
                <Amount>1</Amount>
                <Add>
                <MdAddCircleOutline />
                </Add>
                
            </AmountContainer>
            <Button>Añadir a la cesta</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
