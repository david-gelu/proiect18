import React from 'react';
import styled from 'styled-components';


const Main = styled.div`
  max-width: 70%;
  margin: 1rem auto 0;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start; 
  flex-direction:column;  
`
const Img = styled.img`
  width: 50%;
  margin: 20px auto;
`

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  width:100%;
  background:rgba(161, 161, 161, .3);
`
const ContainerType = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #222;
  width:50%;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  text-align:center;
`
const Type = styled.div`
  margin-top:.7rem;
  margin-left:.5rem;
  padding:.5rem 1rem;
  background:#E3801C;
  color:#222;
  border-radius:5px;
`
const ContainerSpecial = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #222;
  width:50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
`
const Special = styled.div`
  margin:.7rem 0 .7rem .5rem;
  padding:.5rem 1rem;
  background:#E3801C;
  color:#222;
  border-radius:5px;  
}
`

const Pokemon = () => {
  return (
    <Main className="main">
      <Img src="http://placehold.it/400" alt="pokemon-image" />
      <Container className="container">
        <ContainerType className="container-type">
          <Type className="type">type <span className="type-color1"></span></Type>
          <Type className="type">type <span className="type-color2"></span></Type>
        </ContainerType>
        <ContainerSpecial className="container-special">
          <Special className="special">special <span className="special-color1"></span></Special>
          <Special className="special">special <span className="special-color2"></span></Special>
          <Special className="special">special <span className="special-color3"></span></Special>
        </ContainerSpecial>
      </Container>
    </Main >
  );
};

export default Pokemon;