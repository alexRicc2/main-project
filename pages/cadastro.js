import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import UseForm from "../src/components/FormCadastro/UseForm";
import InformacoesDaCompra from "../src/components/FormCadastro/InformacoesDaCompra";
import styled from 'styled-components';

const FormWrappper = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  @media screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 425px){
    padding: 1rem;
  }
`

export default function Cadastro(){
  return(
    <>
    <NavBar/>
    <FormWrappper>
      <UseForm/>
      <InformacoesDaCompra/>
    </FormWrappper>
    <Footer/>
    </>
  )
}