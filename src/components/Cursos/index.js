import React from 'react';
import styled from 'styled-components';

const CursosWrapper = styled.section`
  background-color: #F7F0F5;
  padding-bottom: 20px;

  h2{
    font-size: 2rem;
    font-weight: bold;
    padding: .5rem;
    text-transform: uppercase;
    text-align: center;
  }
  ul{
    display: flex;
    flex-direction: column;
  }
  li{
    background-color: #fff;
    box-shadow: 2px 2px 2px #ccc;
    height: 100px;
    margin: 1%;
    position: relative;
    text-align: center;
    transition: .3s;
  }
  li:hover{box-shadow: 4px 4px 4px #ccc;}
  a{
    color: #000;
    display: block;
    font-weight: bold;
    height: 100%;
    left: 0;
    position: absolute;
    text-decoration: none;
    top: 0;
    width: 100%;
  }
  a:before{
    background: url('img/icone-foneOuvido.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    display: block;
    height: 50px;
    margin: 10px auto;
    width: 50px;
  }
  @media screen and (min-width: 679px){
    ul{
      flex-wrap: wrap;
      flex-direction: row;
    }
    li{width: 48%;}
  }
  @media screen and (min-width: 1024px){
    li{width: 31%;}
  }
`

export default function Cursos() {
  return (
    <CursosWrapper id="cursos">
      <h2>Cursos</h2>
      <nav>
        <ul>
          <li>
            <a href="./index.html">Violão</a>
          </li>
          <li>
            <a href="./index.html">Guitarra</a>
          </li>
          <li>
            <a href="./index.html">Baixo</a>
          </li>
          <li>
            <a href="./index.html">Teclado</a>
          </li>
          <li>
            <a href="./index.html">Piano</a>
          </li>
          <li>
            <a href="./index.html">Bateria</a>
          </li>
          <li>
            <a href="./index.html">Canto</a>
          </li>
          <li>
            <a href="./index.html">Saxofone</a>
          </li>
          <li>
            <a href="./index.html">Arpa</a>
          </li>
        </ul>
      </nav>
    </CursosWrapper>
  )
}