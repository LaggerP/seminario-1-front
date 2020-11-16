import React from 'react';
import "./Calendario.scss";
import CalendarioCard from './CalendarioCard';
import { 
   Container, Row,
} from 'react-bootstrap';
import calendarioImage from '../../assets/images/CalendarioImage.png';
import { listTurns } from '../../Api/services/administrarServices';
import Loading from "../Loading/Loading";


const Calendario = () => {

   const [showData, setShowData] = React.useState(false);
   const [turnos, setTurnos] = React.useState({});

   React.useEffect(function effectFunction() {
      async function fetchTurnos() {
         const response = await listTurns(); //Debería pasarle el user_id? Debería diferenciar con 2 listTurns (médicos y pacientes)?
         setTurnos(response);
         setShowData(true)
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
