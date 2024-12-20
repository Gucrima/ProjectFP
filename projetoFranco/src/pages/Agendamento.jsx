import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './Agendamento.css';

function Contato() {
  const numeroDeTelefone = '554899445621';
  const mensagem = 'Olá!, gostaria de saber mais sobre os serviços da Franco-Parachoques 🔧';
  const linkZap = `https://wa.me/${numeroDeTelefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div>
      <Navbar />

      <div className="conteiner-contato">
        <div className="texto-contato">
          <h1>Entre em Contato!</h1>
          <h1>Seu Carro Como Novo! </h1>

          {/* <h3>
            Você sabia que um para-choque danificado ou uma pintura desgastada podem prejudicar o visual e até a segurança do seu carro?
            Aqui na Franco-Parachoques, oferecemos serviços completos de reparo de para-choques, funilaria de qualidade e pintura impecável, tudo feito por profissionais especializados e com materiais de primeira linha!
          </h3> */}

          <div className="texto-contato1">
            <h2>🔧 Conserto de Para-choques</h2>
            <h2>⚒️ Funilaria Profissional</h2>
            <h2>🎨 Pintura Automotiva de Alta Qualidade</h2>
            <h2>✔️ Atendimento rápido e eficiente</h2>
            <h2>✔️ Preços acessíveis</h2>
            <h2>✔️ Garantia de serviço</h2>
            <h2>✔️ Prazos rápidos</h2>
          </div>

          <h3>
            Deixe seu carro como novo! Entre em contato agora mesmo e agende seu orçamento sem compromisso. Não perca tempo, seu carro merece o melhor!
          </h3>
          <h2>Transforme o visual do seu carro e dê um trato na sua segurança com a FrancoParachoques!</h2>
        </div>

        <div className="maps">

            <div className="conteiner-localizacao">
              <img className="foto_maps" src="./Images/Localizacao_maps.png" alt="Localização no mapa" />
            </div>


            <div className="localizacao-linkmaps"> 
          <a href='https://maps.app.goo.gl/QvNYQhgADwjmAqhH9' target="_blank" rel="noopener noreferrer">
            <img src="./Images/png_localizacao-removebg-preview.png" alt="Botão Localização" />
            Acesse nossa localização no Google Maps 
          </a>
            </div>


          <div className="botaoZap">
            <a href={linkZap} target="_blank" rel="noopener noreferrer">
              <img src="./Images/botao-whatsapp-entrar-contato-grd.webp" alt="Botão para WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Contato;
