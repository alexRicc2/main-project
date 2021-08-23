import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:768px){
    width: 80%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 375px){
    width: 100%;
  }
`
const CardMensagem = styled.div`
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 3px #ccc;
  background-color: #fff;
  color: #444;
  text-align: center;
`
const MensagemHeader = styled.div`
  padding: 1.5rem 2rem;
  border: 1px solid #ccc;
  h1{
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`
const MensagemCorpo = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  ul li{
    text-align: left;
    margin-bottom: 16px;
    padding-left: 10%;
  }
  ul li:before{
    background: url('img/check.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 12px;
  }
`
const MensagemPlano = styled.h2`
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const MensagemPrice = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`

export default function InformacoesDaCompra(){
  return (
    <InfoWrapper>
    <CardMensagem>
      <MensagemHeader>
        <h1 className="card-mensagem__header__titulo">Informações da sua compra</h1>
      </MensagemHeader>
      <MensagemCorpo>
        <MensagemPlano id="planoNome">Plano da sua compra</MensagemPlano>
        <MensagemPrice id="planoPrice">Preço: 00,00</MensagemPrice>
        <ul id="planoAtributos">

        </ul>
        <h3 className="card-mensagem__seguro">Compra Segura</h3>
      </MensagemCorpo>
      </CardMensagem>
      </InfoWrapper>
  )
}