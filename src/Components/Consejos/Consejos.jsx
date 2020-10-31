import React from 'react';
import './Consejos.scss';
import ConsejosCard from './ConsejosCard'
import {
   Container,
   Row,
} from 'react-bootstrap';
import consejosImage from '../../assets/images/ConsejosImage.png'
import { IoMdAdd } from "react-icons/io";
import CreateConsejoModal from './Modal/createConsejoModal'
import { getAllConsejos } from '../../Api/services/consejosServices'
import Loading from "../Loading/Loading";
import { getRol } from '../../Api/services/authService'

const Consejos = () => {

   const [modalShow, setModalShow] = React.useState(false);
   const [showData, setShowData] = React.useState(false);
   const [consejos, setConsejos] = React.useState({});
   const rol = getRol();

   React.useEffect(function effectFunction() {
      async function fetchConsejos() {
         const response = await getAllConsejos();
         setConsejos(response);
         setShowData(true)
      }
      fetchConsejos();
   }, []);

   if (showData) {
      return (
         <div>
            <Container>
               <Row>
                  <div className="ConsejosContainer-Bienvenida">
                     <div className="ConsejosContainer-Bienvenida-Texto">
                        <h1>Consejos médicos</h1>
                     </div>
                     <div className="ConsejosContainer-Bienvenida-Imagen">
                        <img src={consejosImage} height='340px' alt="ConsejosImage" />
                     </div>
                  </div>
               </Row>
               {
                  rol == 2 ?
                     <Row>
                        <div className='add-button hvr-grow' onClick={() => { setModalShow(true) }} ><IoMdAdd className='add-Icon' />Agregar consejo</div>
                     </Row>
                     : null
               }
               <Row>
                  <div className='cardsContainer'>
                     {consejos.map((consejo) => (<ConsejosCard {...consejo} />))}
                     {consejos.length === 0 && (
                        <Container className='text-center'>
                           <div className='void-container'>
                              <h3>¡Ups! No hay consejos</h3>
                           </div>
                        </Container>
                     )}
                  </div>
               </Row>
            </Container>

            <CreateConsejoModal
               show={modalShow}
               onHide={() => setModalShow(false)}
            />
         </div>
      );

   } else {
      return (<Loading />)
   }

};

export default Consejos;