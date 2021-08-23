import React from 'react';
import styled from 'styled-components';

const CentralWrapper = styled.section`
  align-items: center;
  background-image: url('img/fundo-central.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0,0,0, 0.7);
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: calc(100vh - 50px);
  justify-content: center;
  text-align: center;
  h1{
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: .5rem;
  }
  h2{
    color: #fff;
    font-size: 1.1rem;
  }
  a{
    background-color: #fff;
    border-radius: 5px;
    color: #212529;
    margin-top: 6rem;
    padding: 1rem 2rem;
    text-decoration: none;
  }
  a:hover{
    transform: scale(1.05);
    background-color: #ccc;
  }
`

export default function Central(){


  return (
    <CentralWrapper>
      <h1>Professor Ricardo</h1>
      <h2>Aprenda a tocar os instrumentos que você sempre quis</h2>
      <a href="/planos">Matricule-se</a>
    </CentralWrapper>
  )
}