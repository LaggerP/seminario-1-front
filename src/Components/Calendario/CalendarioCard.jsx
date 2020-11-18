import React, {useEffect} from 'react';
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
import { getRol, profileById } from '../../Api/services/authService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Loading from "../Loading/Loading";

const CalendarioCard = ({ id, fecha, hora, comentarios, status, profile_firstname, profile_lastname, profile_id}) => {//Necesito escribir el nombre y apellido del paciente en la Card

   const [modalShow, setModalShow] = React.useState(false);
   const [deleteModal, setDeleteModal] = React.useState(false);
   const [turnoContent, setTurnoContent] = React.useState();

   const [profile_data, setProfileData] = React.useState();
   const [showData, setShowData] = React.useState(false);

   const rol = getRol();
   const turnoData = { id, fecha, hora, comentarios, status, profile_firstname, profile_lastname } //Necesito escribir el nombre y apellido del paciente en la Card

   React.useEffect(function effectFunction() {
      async function fetchProfile() {
         const profile = await profileById(profile_id);
         console.log(profile);
         setProfileData(profile.data);
         setShowData(true);
      }
      fetchProfile();
   }, []);

   if(showData) {
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
                                 {profile_data.firstname + " " + profile_data.lastname}​​​​
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
   }else{
      return (<Loading />)
   }
  


};


export default CalendarioCard