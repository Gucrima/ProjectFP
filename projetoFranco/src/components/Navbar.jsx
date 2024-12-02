import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {


  return (
    <nav className="navbar">
        <img src="./Images/logoSemPistola.png" alt="" />
        <a href="/">Home</a>
        <a href="/Agendamento">Agendamento</a>
        <a href="/Historia">História</a>
        <a href="/Servicos">Serviços</a>
    </nav>
    
  )
 
}

export default Navbar
