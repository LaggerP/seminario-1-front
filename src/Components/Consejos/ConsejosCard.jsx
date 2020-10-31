import React from 'react';
import './Consejos.scss';
import {
   Container,
   Row,
   Card,
   Col,
} from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import EditConsejoModal from './Modal/editConsejoModal'
import DeleteConsejoModal from './Modal/deleteConsejo'
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


export default ConsejosCard