import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import './Home.css'
function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
 

  return (
    <div>
        <Navbar />
      <div className="texto-bem-vindo">
      <h1>Bem Vindo!</h1>
      <h2>Olá {usuarioLogado}</h2>
        </div>

    </div>
  )
}

export default Home
