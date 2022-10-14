import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 100;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  background-color: red;
`;

const Summary = styled.div`
  flex: 1;
`;

const Product = styled.div``;

const ProductDetail = styled.div``;

const PriceDetail = styled.div``;

const Image = styled.img``;

const Details = styled.img``;

const ProductName = styled.img``;

const ProductId = styled.img``;

const ProductColor = styled.img``;

const ProductSize = styled.img``;


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
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <Details>
                   <ProductName><b>Producto:</b>JESSIE THUNDER SHOES</ProductName> 
                   <ProductId><b>ID</b>345678</ProductId> 
                   <ProductColor/> 
                   <ProductSize><b>Talla</b>37.5</ProductSize> 
                </Details>
              </ProductDetail>
              <PriceDetail>
                    precio
                </PriceDetail>
            </Product>
          </Info>
          <Summary>Resumen</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
