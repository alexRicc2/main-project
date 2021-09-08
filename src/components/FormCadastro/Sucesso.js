import React from 'react';
import styled from 'styled-components';
import check from '../../images/check.svg'
import Image from 'next/image';

const Card = styled.div`
  min-width: 400px;
  max-width: 80%;
  max-height: 500px;
  background-color: #00ff00;
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

export default function Sucesso({FormData}){

  const {nome, email, cpf, cell, numCartao, titular, sobrenome, codSeguranca, username, senha1 } = FormData;
  const DadosFormatado = {
    nome: nome,
    email: email,
    cpf: cpf,
    cell: cell,
    plano: 0,
    numcartao: numCartao,
    titular: titular,
    sobrenome: sobrenome,
    cod: codSeguranca,
    username: username,
    senha: senha1
  }
  
  fetch('/api/cadastros', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DadosFormatado)
  })
  .then( async(response) =>{
    const dados = await response.json();
    console.log(dados)
  })

  return(
    <>
    <Card>
    <Image src={check} height='100px' width='100px' fill='white'/>
    <h1>Sucesso</h1> 
    <h2>{nome} voce foi cadastrado com Sucesso!</h2>
    <a href="/"> Voltar ao menu Principal</a>
    </Card>
    </>
  )
}