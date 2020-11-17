import React from 'react';
import "./Calendario.scss";
import CalendarioCard from './CalendarioCard';
import {
   Container, Row,
} from 'react-bootstrap';
import calendarioImage from '../../assets/images/CalendarioImage.png';
import { listMedicTurns, listProfileTurns } from '../../Api/services/turnosServices';
import Loading from "../Loading/Loading";
import { getRol } from '../../Api/services/authService';


const Calendario = () => {

   const [showData, setShowData] = React.useState(false);
   const [turnos, setTurnos] = React.useState();

   React.useEffect(function effectFunction() {
      async function fetchTurnos() {
         const rol = await getRol();
         if (rol == 2) {
            const response = await listMedicTurns();
            console.log(response.data.turns)
            if (response.status === 200) {
               setTurnos(response.data.turns);
               setShowData(true)
            }

         } else if (rol == 3) {
            const response = await listProfileTurns();
            if (response.status === 200) {
               setTurnos(response.data.turns);
               setShowData(true)
            }
         }

      }
      fetchTurnos();
   }, []);

   if (showData) {
      return (
         <div>
            <Container>
               <Row>
                  <div className="CalendarioContainer-Bienvenida">
                     <div className="CalendarioContainer-Bienvenida-Texto">
                        <h1>Mis Turnos</h1>
                     </div>
                     <div className="CalendarioContainer-Bienvenida-Imagen">
                        <img src={calendarioImage} height='300px' alt="CalendarioImage" />
                     </div>
                  </div>
               </Row>
               <Row>
                  <div className='cardsContainer'>
                     {/* Al CalendarioCard tengo que pasarle además del turno, el nombre y apellido del paciente */}
                     {turnos.map((turno) => (<CalendarioCard {...turno} />))}
                     {turnos.length === 0 && (
                        <Container className='text-center'>
                           <div className='void-container'>
                              <h3>No tienes ningún turno asignado</h3>
                           </div>
                        </Container>
                     )}
                  </div>
               </Row>
            </Container>
         </div>
      );
   } else {
      return (<Loading />)
   }
};

export default Calendario;
