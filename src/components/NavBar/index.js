import React from 'react';
import styled from 'styled-components';
import { Link as Scroll } from 'react-scroll';
import Image from 'next/image';
import logo from "../../images/icon_logo2.svg";

const NavBarWrapper = styled.header`
    align-items: center;
    background-color: #212529;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 .5rem;
    font-size: 13px;

    @media screen and (min-width: 600px){
      padding: 0 2rem;
      font-size: 1rem;
    }
  `
  const Navegacao = styled.nav`
    ul{display: flex;}
    li{
      color: #fff;
      margin-left: .8rem;
    }
    a{
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    a:hover{color: #ccc}
    @media screen and (min-width: 600px){
      li{margin-left: 1.2rem}
    }
  `
  
export default function NavBar() {

  

  return (
    <NavBarWrapper>

      <h2><a href="/"><Image src={logo} width="40px" height="40px" /></a></h2>
      <Navegacao>
        <ul>
          <li><a href="/planos">Matricule-se</a></li>
          <li>
            <Scroll to="cursos" spy={true} activeClass="active" smooth={true} duration={700} offset={0}>Cursos</Scroll>
          </li>
          <li>
            <Scroll to="depoimentos" spy={true} activeClass="active" smooth={true} duration={700} offset={0}>Fale conosco</Scroll>
          </li>
        </ul>
      </Navegacao>
    </NavBarWrapper>
  )
}