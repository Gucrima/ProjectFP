import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {


  return (
    <nav className="navbar">

        <Link to="/">Home</Link>
        <Link to="/Agendamento">Agendamento</Link>
        <Link to="/Historia">História</Link>
        <Link to="/Servicos">Serviços</Link>
    </nav>
    
  )
 
}

export default Navbar
