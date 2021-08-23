import React from 'react';
import instagram from "../../images/instagram-brands.svg";
import linkedin from "../../images/linkedin-in-brands.svg";
import youtube from "../../images/youtube-brands.svg";
import github from "../../images/icone_github.svg";
import styled from 'styled-components';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  text-align: center;
  h2{margin-bottom: 10px}
  img{
    width: 24px;
  }
  a{
    margin-left: 10px;
    }
`
const Link = styled.a`
  color: #3b5875;
  text-decoration: none;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <h2> Copyrights&copy; Autor: <Link href="https://alexricc2.github.io/">Alex Sant'Anna</Link></h2>
      <div>
        <a href="https://www.instagram.com/alex_ricardu/" target="_blank" rel="noreferrer">
          <Image src={instagram} className="rodape__icones" alt="instagram do criador"/>
        </a>
        <a href="https://www.linkedin.com/in/alex-ricardo-rodrigues-sant-anna/" target="_blank" rel="noreferrer">
          <Image src={linkedin} className="rodape__icones" alt="linkedin do criador"/>
        </a>
        <a href="https://www.youtube.com/channel/UCubvUoQdw0_RSv8P3Rgfekg" target="_blank" rel="noreferrer">
          <Image src={youtube} className="rodape__icones" alt="youtube do criador"/>
        </a>
        <a href="https://github.com/alexRicc2" target="_blank" rel="noreferrer">
          <Image src={github} className="rodape__icones" alt="github do criador"/>  
        </a>
      </div>
    </FooterWrapper>
  )
}