import React from 'react';
import './Beneficios.css';
import { FaCalculator  } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosNotifications  } from "react-icons/io";

const Beneficios = () => {
  return (   

      <div className="beneficios-container">

        <div>
          <FaCalculator  size="2em" color="blue" />
          <span>Controle de Gastos</span>
        </div>
        
        <div>
          <FiTarget size="2em" color="blue" />
          <span>Metas de Economia</span>
        </div>

        <div>
          <TbReportAnalytics size="2em" color="blue" />
          <span>Relatórios Visuais</span>
        </div>

        <div>
          <IoIosNotifications  size="2em" color="blue" />
          <span>Notificações Inteligentes</span>
        </div>
        
      </div>
    
  );
};

export default Beneficios;
