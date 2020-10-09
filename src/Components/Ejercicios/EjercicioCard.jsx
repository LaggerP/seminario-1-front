import React from 'react';
import './EjercicioCard.scss'

const EjercicioCard = () => {
   return (

      <div className="CardContainer" onClick={() => alert("Soy un juego")}>
         <div className="CardContainer-Status" >
            <span>Finalizado</span>
         </div>
         <div className="CardContainer-Center" >
         </div>
         <div className="CardContainer-Bottom" >
            <h5>Nombre del juego</h5>
         </div>
      </div>
   );
};

export default EjercicioCard;