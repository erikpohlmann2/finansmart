import React from 'react';
import './Prints.css';
import graph from '../../images/graph.png';
import mobileImage from '../../images/mobile-image2.png';
import Image from '../Utils/Image/Image';

const Prints = () => {
  return (   

      <div className="prints-container">
        <div className='prints-container-inside'>
          
          
          <div className="prints-background"></div>
          <div className='prints-title'>
            <h1>Relatórios Visuais</h1>
            <span>Visualize suas finanças de forma clara e intuitiva.</span>
          </div>
          <Image src={mobileImage} className="img-mobile" alt="mobile Image" width={270}/>

          
        </div>
      </div>
    
  );
};

export default Prints;
