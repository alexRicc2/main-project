import React from 'react';
import styled from 'styled-components';

const DescricaoWrapper = styled.section`
  background-color: #213242;
  align-items: center;
  border-bottom: 1px solid #9baec2;
  display: flex;
  flex-direction: column;
  div{
    border-bottom: 1px solid #9baec2;
    color: #fff;
    padding: 20px;
    text-align: center;
    width: 70%;
  }
  @media screen and (min-width: 720px){
    flex-direction: row;
    div{
      border-bottom: none;
      width: 33.33%;
    }
  }
`
export default function DescricaoSection() {
  return (
      <DescricaoWrapper>
        <div>
          <p>
            Aulas particulares semanais
          </p>
        </div>
        <div>
          <p>
            Nivel de aprendizado ajustável a necessidade do aluno
          </p>
        </div>
        <div>
          <p>
            Tenha a experiência completa, do básico ao avançado
          </p>
        </div>
      </DescricaoWrapper>

  )
}