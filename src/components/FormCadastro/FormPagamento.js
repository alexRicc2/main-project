import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import arrow from "../../images/arrow.svg";
import Image from "next/image"
import styled from 'styled-components';
import { Formulario, FormularioHeader, FormButton } from './styles';

const Cartoes = styled.div`
  height: 38px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  span:nth-of-type(1){background-position: 0px -42px;}
  span:nth-of-type(2){background-position: -288px -42px;}
  span:nth-of-type(3){background-position: -288px -71px}
  span:nth-of-type(4){background-position: -0 -13px;}
  span:nth-of-type(5){background-position: -284px -13px;}
  span:nth-of-type(6){background-position: 0px -100px;}
  span{
    background: transparent url('https://www.paypalobjects.com/web/res/e13/29de9ba9019423c167bdd418d7b5b/images/payment-icons-sprite.png') no-repeat;
    width: 47px;
    height: 30px;
    display: inline-block;
    margin-left: 8px;
  }

`

export default function FormPagamento({ FormData, setForm, proximo, anterior, validacoes }) {

  const [erros, setErros] = useState(
    {
      numCartao: { valido: true, texto: "" },
      nomeTitular: { valido: true, texto: "" },
      sobrenome: { valido: true, texto: "" },
      codSeguranca: { valido: true, texto: "" }
    }
  )
  const { numCartao, titular, sobrenome, codSeguranca } = FormData

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido) return false
    }
    return true
  }
  return (
    <>
      <FormularioHeader>
        <Image src={arrow} onClick={() => anterior()} alt="voltar" width="24px" height="24px"></Image>
        <h2 className="cadastroFormulario__titulo">Informações de Pagamento</h2>
      </FormularioHeader>
      <Formulario onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar())proximo()
      }}>
        <Cartoes>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Cartoes>
        <TextField
          id="outlined-basic"
          label="Numero do Cartao"
          variant="outlined"
          value={numCartao}
          name="numCartao"
          error={!erros.numCartao.valido}
          helperText={erros.numCartao.texto}
          onBlur={()=> {
            const ehValido = validacoes.validaNumCartao(numCartao)
            setErros(erros => ({
              ...erros, numCartao: ehValido
            }))
          }}
          onChange={setForm}
          required
          margin="normal" />

        <TextField
          id="outlined-basic"
          label="Nome do titular"
          variant="outlined"
          value={titular}
          name="titular"
          onChange={setForm}
          error={!erros.nomeTitular.valido}
          helperText={erros.nomeTitular.texto}
          onBlur={() => {
            const ehValido = validacoes.validaNome(titular)
            setErros(erros => ({
              ...erros, nomeTitular: ehValido
            }))
          }}
          required
          margin="normal" />

        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          value={sobrenome}
          name="sobrenome"
          onChange={setForm}
          error={!erros.sobrenome.valido}
          helperText={erros.sobrenome.texto}
          onBlur={() => {
            const ehValido = validacoes.validaNome(sobrenome)
            setErros(erros => ({
              ...erros, sobrenome: ehValido
            }))
          }} 
          required
          margin="normal" />

        <TextField
          id="outlined-basic"
          label="Código de segurança"
          variant="outlined"
          value={codSeguranca}
          name="codSeguranca"
          onChange={setForm}
          error={!erros.codSeguranca.valido}
          helperText={erros.codSeguranca.texto}
          onBlur={() => {
            const ehValido = validacoes.validaCodSeguranca(codSeguranca)
            setErros(erros => ({
              ...erros, codSeguranca: ehValido
            }))
          }} 
          required
          margin="normal" />

        <FormButton type="submit" className="cadastroFormulario__submit">Continuar cadastro</FormButton>
      </Formulario>
    </>
  )
}