import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const usuarioLogado = "Usuário"; // Substitua pelo valor real
  const navigate = useNavigate();

  const handleAgendamento = () => {
    navigate('/Agendamento');
  };

  return (
    <div>
      <Navbar />
      <div className="textoEimagem">
        <div className="texto-home">
          <h1>Bem vindo ao nosso site! Realize seu agendamento com a gente!</h1>
          <div className='sub-texto'>
            <h4>Olá {usuarioLogado}! Seja bem vindo ao nosso site! Aqui você pode realizar o agendamento de seu serviço de forma rápida e fácil! Aproveite!</h4>
            </div>
          <button className="botao-agendamento" onClick={handleAgendamento}>Faça seu Agendamento</button>
        </div>
        <div className="imagem-home">
          <img src="./Images/logo-icon.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;