import React from 'react';
import styled from 'styled-components';

const DepoimentosWrapper = styled.section`
  align-items: center;
  background-color: #213248;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  h2{
    color: white;
    font-size: 1.3rem;
    margin: 40px auto 60px auto;
    text-align: center;
  }
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-evenly;
  width: 70%;
  @media screen and (min-width:905px){
    flex-direction: row;
    width: 100%;
  }
`
const Card = styled.div`
  background-color:#f7f0f5;
  border-radius: 30px;
  margin-bottom: 100px;
  padding: 20px;
  h3{
    color: #3b5875;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-align: center;
  }
  p{
    line-height: 1.2;
    text-align: justify;
  }
  @media screen and (min-width: 905px){
    width: 28%;
    margin-bottom: 50px;
  }
`
const Foto = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 3px solid #f7f0f5;
  border-radius: 100%;
  display: block;
  height: 90px;
  margin: auto;
  transform: translateY(-60%);
  width: 90px;
  background-image: url(${props => props.fotoUrl});
`

export default function Depoimentos(){
  return(
    <DepoimentosWrapper id="depoimentos">

        <h2 className="comentarios__titulo">Depoimento de quem já foi aluno</h2>

        <Cards>
            
                <Card>
                    <Foto fotoUrl="img/thais2.jpeg"/>
                    <h3 className="comentarios__nome">Thais Alixandre</h3>
                    <p className="comentario">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dignissimos dolor itaque expedita corrupti! Fugiat ipsa est, excepturi officiis fuga earum, corrupti cum aliquam beatae eveniet perspiciatis quod obcaecati reprehenderit!</p>
                </Card>
                <Card>
                  <Foto fotoUrl="https://unavatar.now.sh/github/matheuswferreira"/>
                    <h3 className="comentarios__nome">Matheus Willian</h3>
                    <p className="comentario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempora excepturi cum laudantium beatae doloribus delectus voluptas deserunt, quidem voluptatem illo amet dolores fuga modi magni repudiandae? Reprehenderit, maiores. Rerum!</p>
                </Card>
                <Card>
                  <Foto fotoUrl="img/paola.jpg"/>
                    <h3 className="comentarios__nome">Paola Guedes</h3>
                    <p className="comentario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum ad non sequi pariatur, ut perspiciatis dicta voluptas quo facilis dolorem itaque placeat, eius saepe doloribus minima animi vero velit. Realmente mudou a minha vida!!
                    </p>
                </Card>        
            </Cards>

    </DepoimentosWrapper>
  )
}