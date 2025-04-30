import React from 'react';
import './Benefits.css';
import { LuCalculator  } from 'react-icons/lu';
import { FiTarget } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

const Benefits = () => {
  return (   

      <div className="ben-container">
        <div className='ben-container-inside'>

          <div className='ben-title'>
            <h1>Benefícios</h1>
            <span>Descubra como o nosso aplicativo pode transformar sua experiência financeira.</span>
          </div>

          <div className='icons-container'>
            <div>
              <LuCalculator size="2em" color="#34495e" />
              <span>Controle de Gastos</span>
            </div>
            
            <div>
              <FiTarget size="2em" color="#34495e" />
              <span>Metas de Economia</span>
            </div>

            <div>
              <TbReportAnalytics size="2em" color="#34495e" />
              <span>Relatórios Visuais</span>
            </div>

            <div>
              <IoMdNotificationsOutline size="2em" color="#34495e" />
              <span>Notificações Inteligentes</span>
            </div>
          </div>
        </div>        
      </div>
    
  );
};

export default Benefits;
