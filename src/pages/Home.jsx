import '../App.scss'
import { Header } from '../components/Header.jsx'
import { Mask } from '../components/Mask.jsx'
import { SectorOnee } from '../components/SectorOnee.jsx'
import { SectorTwo } from '../components/SectorTwo.jsx'
import { SectorTree } from '../components/SectorTree.jsx'
import { Footer } from '../components/Footer.jsx'
import {BrowserRouter} from 'react-router-dom'

export function Home() {



  let arr = [0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <div className="conteiner 2xl:mx-auto 2xl:my-0">
      <Header  />
      <Mask />
      <SectorOnee arr={arr} />
      <SectorTwo arr={arr} />
      <SectorTree />
      <Footer />
    </div>
  )
}



export default Home