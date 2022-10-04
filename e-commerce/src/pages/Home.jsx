import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Container = styled.div`
height: 60px;
background-color: black;
color: white;
`



const Home = () => {
  return (
    <Container><Navbar/></Container>
  )
}

export default Home
