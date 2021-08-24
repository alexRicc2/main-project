import React from 'react';

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
    <h1>Parabens {nome} voce foi cadastrado com Sucesso!</h1>
    <a href="/"> Voltar ao menu Principal</a>
    </>
  )
}