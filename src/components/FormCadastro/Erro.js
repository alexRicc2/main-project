import React from 'react';
import Image from 'next/image';
import x from '../../images/x.svg'
import styled from 'styled-components';

const Card = styled.div`
  min-width: 400px;
  max-width: 80%;
  max-height: 500px;
  background-color: #ff0000;
  padding: 10px;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin: 16px auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px){
    width: 50%;
  }
  h1{
    font-size: 2.5rem;
    line-height: 2;
    text-transform: uppercase;
    flex: 1;

  }
  h2{
    font-size: 1.2rem;
    flex: 1;
  }
  a{
    background-color: white;
    padding: 15px;
    border-radius: 20px;
    text-decoration: none;
    color: #333;
  }
`

export default function Erro(){
  return(
    <Card>
    <Image src={x} height='100px' width='100px' fill='white'/>
    <h1>Error</h1> 
    <h2>Sorry something went wrong with the Form :(</h2>
    <a href="/"> Voltar ao menu Principal</a>
    </Card>
  )
}