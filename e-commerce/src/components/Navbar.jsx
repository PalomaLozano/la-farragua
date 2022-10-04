import React from "react";
import styled from "styled-components";
import { VscSearch } from 'react-icons/vsc';


const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid white;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            input 
           <VscSearch/>
           </SearchContainer>
        </Left>

        <Center>Center</Center>

        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
