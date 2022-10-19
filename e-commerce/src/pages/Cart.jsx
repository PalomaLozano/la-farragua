import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {MdOutlineRemoveCircleOutline} from "react-icons/md";
import {MdAddCircleOutline} from "react-icons/md";

const Container = styled.div`
max-width: 100vw; 
`;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 100vw; 
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  
`;

const Top = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  
  padding: 10px;
  font-size: 12px; 
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; 
    font-size: 16px;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-color: salmon;
  border-style: solid;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "salmon" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 10px; 
  margin: 20px;
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    margin: 0px;
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column; 
  @media screen and (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between;
   }
`;

const Info = styled.div`
  flex: 3;

`;


const Product = styled.div`
display: flex; 
flex-direction: column;

@media screen and (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between;
   }
`;

const ProductDetail = styled.div`
flex: 2; 
display: flex; 
font-size: 12px; 

@media screen and (min-width: 768px) {
    justify-content: left;
    font-size: 16px; 
   }
`;

const PriceDetail = styled.div`
flex: 1; 
display: flex; 
flex-direction: row; 
align-items: right; 
justify-content: space-around; 
@media screen and (min-width: 768px) {
  flex-direction: column;
  align-items: center; 
  justify-content: center;
   } 

`;

const Image = styled.img`
width: 100px; 
@media screen and (min-width: 768px) {
  width: 200px; 
   } 
`;

const Details = styled.div`
padding: 20px; 
display: flex; 
flex-direction: column; 
justify-content: space-around; 
 

`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
width: 10px; 
height: 10px; 
border-radius: 50%; 
background-color: ${(props)=> props.color};
@media screen and (min-width: 768px) {
  width: 20px; 
height: 20px; 
   } 

`;

const ProductSize = styled.span`

`;

const ProductAmountContainter = styled.div`
display: flex; 
align-items: center; 
margin-bottom: 20px; 
`; 


const Remove = styled.div`
padding-right: 5px; 
cursor: pointer ;
`;

const Add = styled.div`
padding-left: 5px; 
cursor: pointer ;
`;

const ProductAmount = styled.span`
font-size: 14px; 
margin: 5px;

@media screen and (min-width: 768px) {
  font-size: 18px; 
   } 
`;

const ProductPrice = styled.span`
font-size: 20px; 
font-weight: 200;
 
@media screen and (min-width: 768px) {
  font-size: 24px; 
   }
`;


const Hr = styled.div`
border-top: 0.5px solid lightcoral; 
margin: 5px; 
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightcoral;
  border-radius: 10px; 
  padding: 20px; 

  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 50vh;
    
   }
`;

const SummaryTitle = styled.h1`
font-weight: 200; 
`;
const SummaryItem = styled.div`
margin: 30px 0px; 
display: flex; 
justify-content: space-between;
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px; 
background-color: salmon; 
color: white; 
font-weight: 600; 
border: none;
border-radius: 10px; 
cursor: pointer; 
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Tu Cesta</Title>
        <Top>
          <TopButton>Seguir comprando</TopButton>
          <TopTexts>
            <TopText>Cesta de la compra(2)</TopText>
            <TopText>Lista de deseos(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Comprar</TopButton>
        </Top>
        <Bottom>
          <Info>
          <Hr/>
            <Product>
            
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <Details>
                   <ProductName><b>Producto:</b>JESSIE THUNDER SHOES</ProductName> 
                   <ProductId><b>ID</b>345678</ProductId> 
                   <ProductColor color = "black"/>
                   <ProductSize><b>Talla</b>37.5</ProductSize> 
                </Details>
              </ProductDetail>
              <PriceDetail>
                    <ProductAmountContainter>
                    
                <Remove>
            <MdOutlineRemoveCircleOutline/>
            </Remove>
                <ProductAmount>1</ProductAmount>
                <Add>
                <MdAddCircleOutline />
                </Add>
                    </ProductAmountContainter>
                    <ProductPrice>Precio: 30€</ProductPrice>
                </PriceDetail>
            </Product>
            <Hr/>
            <Product>
            
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                <Details>
                   <ProductName><b>Producto:</b>PILZ COFFEE SHIRT</ProductName> 
                   <ProductId><b>ID</b>562387</ProductId> 
                   <ProductColor color = "grey"/>
                   <ProductSize><b>Talla</b>M</ProductSize> 
                </Details>
              </ProductDetail>
              <PriceDetail>
                    <ProductAmountContainter>
                    
                <Remove>
            <MdOutlineRemoveCircleOutline/>
            </Remove>
                <ProductAmount>1</ProductAmount>
                <Add>
                <MdAddCircleOutline />
                </Add>
                    </ProductAmountContainter>
                    <ProductPrice>Precio: 20€</ProductPrice>
                </PriceDetail>
            </Product>
          </Info>
          <Summary>
          <SummaryTitle>Resumen del pedido</SummaryTitle>
          <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>50€</SummaryItemPrice>
          </SummaryItem>

          
          <SummaryItem>
          <SummaryItemText>Envío: </SummaryItemText>
          <SummaryItemPrice>5€</SummaryItemPrice>
          </SummaryItem>

          
          <SummaryItem>
          <SummaryItemText>Descuento del envío: </SummaryItemText>
          <SummaryItemPrice>-5€</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem type="total">
          <SummaryItemText>Total: </SummaryItemText>
          <SummaryItemPrice>50€</SummaryItemPrice>
          </SummaryItem>

          <Button>Finalizar compra</Button>


          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
