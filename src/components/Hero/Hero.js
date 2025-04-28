import React from 'react';
import './Hero.css';
import Button from '../Utils/ButtonAction/Button';
import Image from '../Utils/Image/Image';
import HeroImage from '../../images/hero-image.png';

const Hero = () => {
  return (   

      <div className="hero-container">
        <p className='hero-title'>Controle suas finanças de forma simples e inteligente.</p>
        <span className="hero-subtitle">O aplicativo que ajuda você a economizar e investir melhor.</span>
        <Button text="BAIXAR AGORA" onClick={() => console.log('Button clicked!')} />
        <Image src={HeroImage} alt="Hero Image" className="hero-image" width={200}/>
        
      </div>
    
  );
};

export default Hero;
