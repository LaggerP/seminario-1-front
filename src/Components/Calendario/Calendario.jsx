import React from 'react';
import "./Calendario.scss";
import CalendarioCard from './CalendarioCard';
import { 
   Container, Row,
} from 'react-bootstrap';
import calendarioImage from '../../assets/images/CalendarioImage.png';
import { listTurns } from '../../Api/services/administrarServices';
import Loading from "../Loading/Loading";


// const turnosMock = [
//    {
//       id: 1,
//       fecha: "Miércoles 21 de octubre",
//       hora: "12:30hs",
//       paciente: "Matías Cardozo",
//       comentarios: "Lorem ipsum dolor sit amet consectetur adipiscing, malesuada."
//    },
//    {
//       id: 2,
//       fecha: "Jueves 22 de octubre",
//       hora: "17:00hs",
//       paciente: "Martín McVuelo",
//       comentarios: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada."
//    },
//    {
//       id: 3,
//       fecha: "Viernes 23 de octubre",
//       hora: "14:30hs",
//       paciente: "Gabriel Verdes",
//       comentarios: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsam aspernatur facere accusamus eos reprehenderit eius at sed consequatur ab. Nam odit alias quod non earum, magni sequi laudantium ratione nostrum quos quia accusamus autem corporis in ducimus dolorum voluptas quaerat deleniti, quis et. Consequatur quasi nihil eius dolor quidem! Deserunt in deleniti itaque facere veniam. Aliquam maiores autem quia quo dolore ad illo voluptates corporis aperiam, animi ipsum doloremque cumque minima optio, odio fuga molestiae assumenda culpa totam tenetur? Ipsum quaerat cumque, sint libero maiores, earum dignissimos quisquam, deserunt debitis ducimus"

//    },
// ]

const Calendario = () => {

   const [showData, setShowData] = React.useState(false);
   const [turnos, setTurnos] = React.useState({});

   React.useEffect(function effectFunction() {
      async function fetchTurnos() {
         const response = await listTurns();
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

// const TurnosCard = ({ id, fecha, hora, paciente, comentarios }) => {

//    return (
//       <Card>
//          <Card.Header as="h5">
//             <Row>
//                <div className="col">
//                   {fecha}
//                </div>
//                <div className="col-auto">
//                   {hora}
//                </div>
//             </Row>
//             <Row>
//                <div className="col">
//                   <p>Paciente: {paciente}</p>
//                </div>
//             </Row>
//          </Card.Header>
//          <Card.Body>
//             <Card.Text>
//                {comentarios}
//             </Card.Text>
//          </Card.Body>
//       </Card>
//    );
// };


// const Calendario = () => {


//    return (
//       <div>
//          <Container>
//             <Row>
//                <div className="CalendarioContainer-Bienvenida">
//                   <div className="CalendarioContainer-Bienvenida-Texto">
//                      <h1>Mi Calendario</h1>
//                   </div>
//                   <div className="CalendarioContainer-Bienvenida-Imagen">
//                      <img src={calendarioImage} height='300px' alt="CalendarioImage" />
//                   </div>
//                </div>
//             </Row>
//             <Row>
//                <div className='cardsContainer'>

//                   {turnosMock.map((turno) => (<TurnosCard {...turno}></TurnosCard>))}

//                </div>
//             </Row>



//          </Container>
//       </div>

//    );
// };

// export default Calendario;