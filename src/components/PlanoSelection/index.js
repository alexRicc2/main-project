import React from 'react';
import styled from 'styled-components';

const PlanosWrapper = styled.div`
  background: linear-gradient(to right, #E2E2E2, #C9D6FF); 
  background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
  min-height: 100vh;
`
const PlanoSelectionTitle = styled.h1`
  text-align: center;
  padding-top: 32px;
  font-size: 2rem;
  font-weight: 500;
  color: #444;
`
const Planos = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  padding-bottom: 7%;
  padding: 0 2rem;
  @media screen and (max-width: 767px){
    flex-direction: column;
    align-items: center;
    padding: unset;
  }
`
const Plano = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 250px;

  max-width: 30%;
  text-align: center;
  color: #444;
  position: relative;

  ul{
    text-align: left;
    margin-bottom: 16px;
    flex-grow: 1;
  }
  ul li{
    line-height: 2;
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
  button{
    border: none;
    background: #57AFF7;
    border-radius: 10px;
    width: 70%;
    color: #fff;
    padding: 10px 16px;
    font-weight: bold;
    margin: 16px 0;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover{
    box-shadow: 1px -1px 1px #ccc;
    transform: scale(1.05)
  }
  @media screen and (max-width: 767px){
    width: 400px;
    max-width: 80%;
    margin-bottom: 32px;
  }
`
const PlanoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.3rem;
  text-transform: capitalize;
`
const PlanoSubTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`
const PlanoPrice = styled.h2`
  color: #000;
  font-size: 2.5rem;
  padding-bottom: .5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`
const PlanoEtiqueta = styled.span`
  position: absolute;
  right: 0;
  top: 8px;
  background-color: #0DAB76;
  border-radius: 4px 0 0 4px;
  padding: 4px;
  text-transform: uppercase;
  color: #fff;
  font-size: .8rem;
`

export default function PlanoSelection() {
  return (
    <PlanosWrapper>
      <PlanoSelectionTitle>Desperte o músico que há dentro de você!</PlanoSelectionTitle>
      <Planos>
        <Plano>
          <PlanoTitle>Curso 1</PlanoTitle>
          <PlanoSubTitle>Subtitulo</PlanoSubTitle>
          <PlanoPrice>R$00,00</PlanoPrice>
          <ul className="plano__atributos">
            <li>Propriedade1</li>
            <li>Propriedade2</li>
            <li>Propriedade3</li>
            <li>Propriedade4</li>
            <li>Propriedade5</li>
            <li>Propriedade6</li>
          </ul>
          <a href="/cadastro"><button>Matricule-se</button></a>
        </Plano>
        <Plano>
          <PlanoTitle>Curso 2</PlanoTitle>
          <PlanoSubTitle>Subtitulo</PlanoSubTitle>
          <PlanoPrice>R$00,00</PlanoPrice>
          <ul className="plano__atributos">
            <li>Propriedade1</li>
            <li>Propriedade2</li>
            <li>Propriedade3</li>
            <li>Propriedade4</li>
            <li>Propriedade5</li>
            <li>Propriedade6</li>
          </ul>
          <a href="/cadastro"><button>Matricule-se</button></a>
        </Plano>
        <Plano>
          <PlanoTitle>Curso 3</PlanoTitle>
          <PlanoEtiqueta>Popular</PlanoEtiqueta>
          <PlanoSubTitle>Subtitulo</PlanoSubTitle>
          <PlanoPrice>R$00,00</PlanoPrice>
          <ul className="plano__atributos">
            <li>Propriedade1</li>
            <li>Propriedade2</li>
            <li>Propriedade3</li>
            <li>Propriedade4</li>
            <li>Propriedade5</li>
            <li>Propriedade6</li>
          </ul>
          <a href="/cadastro"><button>Matricule-se</button></a>
        </Plano>
      </Planos>
    </PlanosWrapper>
  )
}