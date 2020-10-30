import React from 'react';
import './Consejos.scss';
import {
   Container,
   Row,
   Card,
   Col,
} from 'react-bootstrap';
import consejosImage from '../../assets/images/ConsejosImage.png'
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import CreateConsejoModal from './Modal/createConsejoModal'
import EditConsejoModal from './Modal/editConsejoModal'
import DeleteConsejoModal from './Modal/deleteConsejo'
import { getAllConsejos } from '../../Api/services/consejosServices'
import Loading from "../Loading/Loading";
import { getRol } from '../../Api/services/authService'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'



const ConsejosCard = ({ id, title, content, status }) => {

   const [modalShow, setModalShow] = React.useState(false);
   const [deleteModal, setDeleteModal] = React.useState(false);
   const [consejoContent, setconsejoContent] = React.useState()

   const rol = getRol();

   const consejoData = { id, title, content, status }

   return (
      <div>
         <Card>
            <Card.Header as="h5">

               <Row>
                  <Col>
                     {title}
                  </Col>
                  {
                     rol == 2 ?
                        <Col className='col-lg-2 text-right'>
                           <div className='d-flex flex-row-reverse'>
                              <OverlayTrigger overlay={<Tooltip>Eliminar consejo</Tooltip>}>
                                 <div onClick={() => { setDeleteModal(true); setconsejoContent(consejoData) }} className='icon-container flex-row-reverse'>
                                    <TiDeleteOutline id='delete-icon' />
                                 </div>
                              </OverlayTrigger>

                              <OverlayTrigger overlay={<Tooltip>Editar consejo</Tooltip>}>
                                 <div onClick={() => { setModalShow(true); setconsejoContent(consejoData) }} className='icon-container flex-row-reverse'>
                                    <FaRegEdit id='edit-icon' />
                                 </div>
                              </OverlayTrigger>
                           </div>
                        </Col>
                        : null
                  }

               </Row>

            </Card.Header>
            <Card.Body>
               <Card.Text>
                  {content}
               </Card.Text>
            </Card.Body>
         </Card>

         <EditConsejoModal
            data={consejoContent}
            show={modalShow}
            onHide={() => setModalShow(false)}
         />

         <DeleteConsejoModal
            data={consejoContent}
            show={deleteModal}
            onHide={() => setDeleteModal(false)}
         />
      </div>
   );


};


const Consejos = () => {

   const [modalShow, setModalShow] = React.useState(false);

   const [showData, setShowData] = React.useState(false);
   const [consejos, setConsejos] = React.useState({});

   const rol = getRol();

   React.useEffect(function effectFunction() {
      async function fetchBooks() {
         const response = await getAllConsejos();
         setConsejos(response);
         setShowData(true)
      }
      fetchBooks();
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

                     {consejos.map((consejo) => (<ConsejosCard {...consejo}></ConsejosCard>))}

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