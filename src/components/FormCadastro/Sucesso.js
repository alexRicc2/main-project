import React from 'react';

export default function Sucesso({FormData}){

  const {nome} = FormData;

  return(
    <>
    <h1>Parabens {nome} voce foi cadastrado com Sucesso!</h1>
    <a href="/"> Voltar ao menu Principal</a>
    </>
  )
}