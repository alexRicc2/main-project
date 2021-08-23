import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.section`
  align-items: center;
  background-color: #213242;
  display: flex;
  flex-direction: column;
  padding: 20px;

  div{
    color: #fff;
    display: flex;
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: bold;
    flex-direction: column;
    line-height: 2;
    padding: 20px;
    text-align: center;
  }
  h2{
    font-weight: bolder;
    text-transform: uppercase;
  }
  ul{flex-grow: 1;}
  iframe{max-width: 100%}

  @media screen and (min-width:760px){
    flex-direction: row;
    padding: 5% 10% 5% 10%;
    div{
      height: 315px;
      margin-left: 1.5rem;
    }
  }
`

export default function Video(){
  return(

    <VideoWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwKhufmMxko" frameBorder="0" allowFullScreen title="teste"></iframe>

        <div className="video__texto">
            <h2 className="video__descricao">1 Aula gratis</h2>
            <ul className="video__lista">
                <li>Faça aulas onde e quando quiser</li>
                <li>Compatibilidade mobile com aplicativo próprio</li>
            </ul>
            <h3>OBRIGADO POR VISITAR!!!</h3>
        </div>
    </VideoWrapper>
  )
}