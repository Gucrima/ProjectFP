import React from 'react';
import Navbar from "../components/Navbar";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Servicos.css';

function Final() {
  return (
    <div>
      <Navbar />
      <Carousel className="custom-carousel">
        <div className='carocel'>
          <img src="./Images/foto lateral 1.png" alt="Serviço 1" />
        </div>
        <div className='carocel'>
          <img src="./Images/Audi.png" alt="Serviço 2" />
        </div>
        <div className='carocel'>
          <img src="./Images/bmw.jpeg" alt="Serviço 3" />
        </div>
        <div className='carocel'>
          <img src="./Images/jeep.png" alt="Serviço 3" />
        </div>
        <div className='carocel'>
          <img src="./Images/mercedes.png" alt="Serviço 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Final;