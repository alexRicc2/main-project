import NavBar from '../src/components/NavBar'
import Central from '../src/components/Central'
import DescricaoSection from '../src/components/DescricaoSection'
import Cursos from '../src/components/Cursos'
import Depoimentos from '../src/components/Depoimentos'
import FormLogin from '../src/components/FormLogin'
import Video from '../src/components/Video'
import PlanoSelection from '../src/components/PlanoSelection'
import Footer from '../src/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(function() {
    //API graphQL datocms
    fetch('https://graphql.datocms.com/',{
  method: 'POST',
  headers: {
    'authorization' : '098d23c247aae4c160970a002bb5b9',
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  },
  body: JSON.stringify({ "query": `query {
    allRegisters {
      email
      senha
    }
  }` })
}).then((response) => response.json())
.then((respostaCompleta) => {
  const usuarios = respostaCompleta.data.allRegisters
  console.log(usuarios)})
  })  
  
  return (
    <>
      <NavBar/>
      <Central/>
      <DescricaoSection/>
      <Cursos/>
      <Depoimentos/>
      <FormLogin/>
      <Video/>
      <PlanoSelection/>
      <Footer/>
    </>
  )
}
