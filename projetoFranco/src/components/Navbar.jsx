import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./Images/logoSemPistola.png" alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/Agendamento">Agendamento</Link>
      <Link to="/Historia">Sobre Nós</Link>
      <Link to="/Servicos">Serviços já realizados</Link>
    </nav>
  );
}

export default Navbar;