import NavBar from '../src/components/NavBar'
import Central from '../src/components/Central'
import DescricaoSection from '../src/components/DescricaoSection'
import Cursos from '../src/components/Cursos'
import Depoimentos from '../src/components/Depoimentos'
import FormLogin from '../src/components/FormLogin'
import Video from '../src/components/Video'
import PlanoSelection from '../src/components/PlanoSelection'
import Footer from '../src/components/Footer'

export default function Home() {
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
