import React from 'react';
import Navbar from '../components/Navbar';
import './Historia.css';

function Generica() {
  return (
    <div>
      <Navbar />
      <div className="texto-historia">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à nossa empresa! Somos dedicados a fornecer serviços de alta qualidade e a garantir a satisfação de nossos clientes. Nossa equipe é composta por profissionais experientes e apaixonados pelo que fazem.
        </p>
        <p>
          Desde a nossa fundação, temos nos esforçado para oferecer soluções inovadoras e personalizadas para atender às necessidades de nossos clientes. Acreditamos na importância de construir relacionamentos duradouros e de confiança com todos que atendemos.
        </p>
        <p>
          Nossa missão é proporcionar uma experiência excepcional em cada interação, e estamos comprometidos em manter os mais altos padrões de excelência em tudo o que fazemos. Obrigado por escolher nossa empresa. Estamos ansiosos para trabalhar com você!
        </p>
      </div>
    </div>
  );
}

export default Generica;