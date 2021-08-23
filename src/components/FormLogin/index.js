import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  padding: 2% 2% 4%;
  font-family: 'Montserrat', sans-serif;

  @media screen and (min-width:760px){
    margin: auto;
    width: 600px;
  }
`
const FormTitle = styled.span`
  display: block;
  font-size: 30px;
  line-height: 1.2;
  padding-bottom: 43px;
  padding-top: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`
const Input = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
  height: 80px;
  position: relative;
  margin-bottom: 10px;
  width: 100%;

  input{
    background: 0 0;
    border: none;
    display: block;
    padding: 0 26px;
    outline: none;
    width: 100%;
  }
`
const FormLembraDeMin = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-left:2px;
  padding-right:2px;
  a{
    color: black;
    text-decoration: none;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button{
    align-items: center;
    background-color: #213242;
    border-radius: 10px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: bold;
    height: 50px;
    justify-content: center;
    letter-spacing: 1px;
    padding: 0 20px;
    text-transform: uppercase;
    width: 100%;
  }
  button:hover{
    background-color: #253646;
  }
`

export default function FormLogin() {
  
  return (
    <FormWrapper id="matricula">
      <FormTitle>Já sou Aluno</FormTitle>
      <Input>
        <input type="email" name="email" placeholder="Email" data-form-email />
      </Input>

      <Input>
        <input type="password" name="password" placeholder="Password" data-form-senha />
      </Input>
      <FormLembraDeMin>
        <div>
          <input type="checkbox" id="ckb" />
          <label htmlFor="ckb">Lembrar de mim</label>
        </div>
        <div>
          <a href="./index.html">Esqueci a senha</a>
        </div>
      </FormLembraDeMin>
      <ButtonWrapper>
        <button data-form-botao>
          Login
        </button>
      </ButtonWrapper>
    </FormWrapper>
  )
}