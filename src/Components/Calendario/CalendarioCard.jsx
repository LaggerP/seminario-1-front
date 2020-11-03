import React from 'react';
import './Calendario.scss';
import {
   Row,
   Card,
   Col,
} from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import EditTurnoModal from './Modal/editTurnoModal';
import DeleteTurnoModal from './Modal/deleteTurno';
import { getRol } from '../../Api/services/authService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const CalendarioCard = ({ id, fecha, hora, paciente, comentarios, status }) => {

   const [modalShow, setModalShow] = React.useState(false);
   const [deleteModal, setDeleteModal] = React.useState(false);
   const [turnoContent, setTurnoContent] = React.useState();

   const rol = getRol();
   const turnoData = { id, fecha, hora, paciente, comentarios, status }

   return (
      <div>
         <Card>
            <Card.Header as="h5">

               <Row>
                  <Col>
                     {fecha}
                  </Col>
                  <Col className='col-lg-2 text-right'>
                      {hora}
                  </Col>
               </Row>
                  {
                     rol == 2 ?
                        <Row>
                            <Col>
                                {paciente}
                            </Col>
                            <Col className='col-lg-2 text-right'>
                              <div className='d-flex flex-row-reverse'>
                                 <OverlayTrigger overlay={<Tooltip>Eliminar turno</Tooltip>}>
                                       <div onClick={() => { setDeleteModal(true); setTurnoContent(turnoData) }} className='icon-container flex-row-reverse'>
                                          <TiDeleteOutline id='delete-icon' />
                                       </div>
                                 </OverlayTrigger>

                                 <OverlayTrigger overlay={<Tooltip>Editar Turno</Tooltip>}>
                                       <div onClick={() => { setModalShow(true); setTurnoContent(turnoData) }} className='icon-container flex-row-reverse'>
                                          <FaRegEdit id='edit-icon' />
                                       </div>
                                 </OverlayTrigger>
                              </div>
                            </Col>
                        </Row>
                     : null
                  }

            </Card.Header>
            <Card.Body>
               <Card.Text>
                  {comentarios}
               </Card.Text>
            </Card.Body>
         </Card>
         <EditTurnoModal
            data={turnoContent}
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
         <DeleteTurnoModal
            data={turnoContent}
            show={deleteModal}
            onHide={() => setDeleteModal(false)}
         />
      </div>
   );


};


export default CalendarioCard