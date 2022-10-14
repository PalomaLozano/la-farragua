import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductFilter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px; 
`;

const Select = styled.select`
padding: 10px; 
margin-right: 20px; 
`;

const Option = styled.option``;

const ProductsList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Vestidos</Title>
      <FilterContainer>
        <ProductFilter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Rojo</Option>
            <Option>Azul</Option>
            <Option>Amarillo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Talla
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </ProductFilter>
        <ProductFilter>
          <FilterText>Ordenar Productos:</FilterText>
          <Select>
            <Option selected>
              Recientes
            </Option>
            <Option>Precio(asc)</Option>
            <Option>Precio(des)</Option>
            
          </Select>
        </ProductFilter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductsList;
