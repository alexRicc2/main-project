import React from 'react';
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

export default function FormPagamento({ FormData, setForm, proximo, anterior }) {

  const { numCartao, titular, sobrenome, codSeguranca } = FormData
  return (
    <>
      <FormularioHeader>
        <Image src={arrow} onClick={() => anterior()} alt="voltar" width="24px" height="24px"></Image>
        <h2 className="cadastroFormulario__titulo">Informações de Pagamento</h2>
      </FormularioHeader>
      <Formulario onSubmit={(event) => {
        event.preventDefault()
        proximo()
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
          required
          margin="normal" />

        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          value={sobrenome}
          name="sobrenome"
          onChange={setForm}
          required
          margin="normal" />

        <TextField
          id="outlined-basic"
          label="Código de segurança"
          variant="outlined"
          value={codSeguranca}
          name="codSeguranca"
          onChange={setForm}
          required
          margin="normal" />

        <FormButton type="submit" className="cadastroFormulario__submit">Continuar cadastro</FormButton>
      </Formulario>
    </>
  )
}