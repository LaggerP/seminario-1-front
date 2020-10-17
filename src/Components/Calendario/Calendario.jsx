import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Calendario.scss";
import calendarImage from '../../assets/images/calendar5.png'
import laptopImage from '../../assets/images/ejercicioLaptop.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Calendario = () => {
   return (
      <div className="CalendarioContainer">
         <Container>
            <div className="CalendarioContainer-Bienvenida">
               <div className="CalendarioContainer-Bienvenida-Texto">
                  <h2>Mi Calendario</h2>
               </div>
               <div className="CalendarioContainer-Bienvenida-Imagen">
                  <img src={calendarImage} alt="" />
                  {/* <img src={laptopImage} alt="" /> */}
               </div>
            </div>
            <div className="CalendarioContainer-Turno">
               <Row>
                  <div className="col">
                     <h2>Miércoles 21 de octubre</h2>
                  </div>
                  <div className="col-auto">
                     {/* <h2 className="alignright">12:30hs</h2> */}
                     <h2>12:30hs</h2>
                  </div>
               </Row>
               {/* <Row>
                  <div className="col-auto-12">
                     <h3>Comentarios del Médico</h3>
                  </div>
               </Row> */}
            </div>
         </Container>
      </div>

   );
};

export default Calendario;