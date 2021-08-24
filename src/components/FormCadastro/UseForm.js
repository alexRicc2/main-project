import FormPersonalData from './FormPersonalData';
import FormPagamento from './FormPagamento';
import FormConectar from './FormConectar';
import Sucesso from './Sucesso';
import Erro from './Erro';
import { useForm, useStep } from 'react-hooks-helper';
import {validacoes} from './validacoes';
import {Stepper, Step, StepLabel} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-right: 1rem;
  @media screen and (max-width: 768px){
    max-width: 100%;
    margin-right: unset;
  }
`

export default function UseForm() {

  
  const defaultData = {
    nome: '',
    email: '',
    cpf: '',
    cell: '',
    numCartao: '',
    titular: '',
    sobrenome: '',
    codSeguranca: '',
    username: '',
    senha1: '',
    senha2: ''
  }
  const [etapaAtual, setEtapaAtual] = useState(0)
  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }
  function anterior(){
    setEtapaAtual(etapaAtual - 1);
  }
  const steps = [
    { id: 'personalData' },
    { id: 'Pagamento' },
    { id: 'Conectar' },
    { id: 'Sucesso'},
    { id: 'erro'}
  ]
  
  const [FormData, setForm] = useForm(defaultData);
  
  
  const props = { FormData, setForm, validacoes, proximo, anterior}
  const formularios = [
    <FormPersonalData {...props}/>,
    <FormPagamento {...props}/>,
    <FormConectar {...props}/>,
    <Sucesso {...props}/>,
    <Erro/>
  ]
      return (
        <Wrapper>
        <Stepper activeStep={etapaAtual} alternativeLabel style={{paddingLeft: '0', paddingRight: '0'}}>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </Wrapper>
      )
    
}
