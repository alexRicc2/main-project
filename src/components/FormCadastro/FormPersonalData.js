import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { Formulario, FormularioHeader, FormButton } from './styles';
export default function FormPersonalData({ FormData, setForm, validacoes, proximo }) {

  const { nome, email, cpf, cell } = FormData;
  const opcoes = [
    {
      value: "Cartao de crédito"
    },
    {
      value: "Boleto Bancario"
    }
  ]
  const [pagamento, setPagamento] = React.useState('Cartao de crédito');

  const [erros, setErros] = useState(
    {
      nome: { valido: true, texto: "" },
      email: { valido: true, texto: "" },
      cpf: { valido: true, texto: "" },
      cell: { valido: true, texto: "" }
    })
  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido)return false
    }
    return true
  } 
  const handleChange = (e) => {
    setPagamento(e.target.value);
    console.log(pagamento)
  }
  return (
    <>
      <FormularioHeader>
        <h2 className="cadastroFormulario__titulo">Informações pessoais</h2>
      </FormularioHeader>
      <Formulario autoComplete="false" onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar())proximo()

      }}>
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={setForm}
          required
          margin="normal"
          error={!erros.email.valido}
          helperText={erros.email.texto}
          onBlur={() => {
            const ehValido = validacoes.validaEmail(email)
            setErros(erros => ({
              ...erros, email: ehValido
            }))
          }} />
        <TextField
          type="text"
          id="outlined-basic"
          label="Nome Completo"
          variant="outlined"
          name="nome"
          value={nome}
          onChange={setForm}
          required
          margin="normal"
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
          onBlur={() => {
            const ehValido = validacoes.validaNome(nome)
            setErros(erros => ({
              ...erros, nome: ehValido
            }))
          }} />
        <TextField
          type="text"
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          name="cpf"
          value={cpf}
          onChange={setForm}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          required
          margin="normal"
          onBlur={() => {
            const ehValido = validacoes.validaCpf(cpf)
            setErros(erros => ({
              ...erros, cpf: ehValido
            }))
          }} />
        <TextField
          type="number"
          id="outlined-basic"
          label="Celular com DDD"
          variant="outlined"
          name="cell"
          value={cell}
          onChange={setForm}
          required
          margin="normal"
          helperText={erros.cell.texto}
          error={!erros.cell.valido}
          onBlur={() => {
            const ehValido = validacoes.validaCell(cell)
            setErros(erros => ({
              ...erros, cell: ehValido
            }))
          }} />

        <TextField
          id="standard-select-currency"
          select
          label="Pagamento"
          value={pagamento}
          onChange={handleChange}
          helperText="Por favor selecione o método de pagamento"
          variant="outlined"
          margin="normal"
        >
          {opcoes.map((opcao) => (
            <MenuItem key={opcao.value} value={opcao.value}>
              {opcao.value}
            </MenuItem>
          ))}
        </TextField>
        <FormButton type="submit">Continuar cadastro</FormButton>
      </Formulario>
    </>
  )
}
