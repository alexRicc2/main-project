import React from 'react';
import { TextField } from '@material-ui/core';
import arrow from '../../images/arrow.svg';
import { Formulario, FormularioHeader, FormButton } from './styles';
import Image from 'next/image';
export default function FormConectar({ FormData, setForm, navigation }) {

  const { username, senha1, senha2 } = FormData

  return (
    <Formulario onSubmit={(event) =>{
      event.preventDefault()
      navigation.next()
    }}>
      <FormularioHeader>
        <Image src={arrow} onClick={() => navigation.previous()} alt="voltar"></Image>
        <h2 className="cadastroFormulario__titulo">Acesso à conta</h2>
      </FormularioHeader>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        name="username"
        onChange={setForm}
        required
        margin="normal" />

      <TextField
        type="password"
        label="Senha"
        variant="outlined"
        value={senha1}
        name="senha1"
        onChange={setForm}
        required
        margin="normal" />

      <TextField
        type="password"
        label="Confirmar Senha"
        variant="outlined"
        value={senha2}
        name="senha2"
        onChange={setForm}
        required
        margin="normal" />

      <FormButton type="submit">Finalizar Cadastro</FormButton>
    </Formulario>
  )
}