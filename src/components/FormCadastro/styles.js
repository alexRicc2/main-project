import styled from "styled-components";

export const Formulario = styled.form`
  color: #444;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // align-items: center;
  background-color: #fff;
  width: 600px;
  max-width: 50%;
  @media screen and (max-width:768px) {
      width: 100%;
      max-width: unset;
      margin-bottom: 1rem;
  }
`

export const FormularioHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  position: relative;
  h2{
    text-align: center;
    font-size: 2rem;
    line-height: 1.5;
    text-transform: uppercase;
    flex-grow: 1;
    position: relative;
  }
  @media screen and (max-width: 768px){
    h1{
      font-size: 1.5rem;
    }
  }
`

export const FormButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #0DAB76;
  padding: 10px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
`