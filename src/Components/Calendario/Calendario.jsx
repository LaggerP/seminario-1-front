import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Calendario.scss";

const Calendario = () => {
   return (
      <div className="calendar">
         
         <div className="mi-calendario">
            <p>Mi Calendario</p>
            <img className="imagen" src="calendar.png" width="433px" height="384px"></img>
         </div>

         <div className="turno">

         </div>

      </div>

   );
};

export default Calendario;