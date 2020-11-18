import React, { useEffect } from 'react';
import ProfileCreationModal from './Modal/ProfileCreationModal'
import ProfileEditModal from './Modal/ProfileEditModal'
import ProfileExerciseAssignmentModal from './Modal/ProfileExerciseAssignmentModal'
import ProfileVisitAssignmentModal from './Modal/ProfileVisitAssignmentModal'
import DeleteProfileModal from './Modal/DeleteProfileModal'
import DeleteResponsableModal from './Modal/DeleteResponsableModal'
import './Administrar.scss';
import {
   Row,
   Col,
   Table,
} from 'react-bootstrap';
import { GiInvertedDice5 } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { BsCalendar, BsPersonDash } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import * as moment from 'moment';

const ResponsableTable = ({ id, username, email, firstname, lastname, profiles, exercises, fetchData }) => {
   const [modalProfileEdit, setModalProfileEdit] = React.useState(false);
   const [modalProfileCreation, setModalProfileCreation] = React.useState(false);
   const [modalExerciseAssignment, setModalExerciseAssignment] = React.useState(false);
   const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);
   const [modalDeleteProfile, setModalDeleteProfile] = React.useState(false);
   const [modalDeleteResponsable, setModalDeleteResponsable] = React.useState(false);


   const [profileData, setProfileData] = React.useState()
   const [responsableData, setResponsableData] = React.useState()


   return (
      <div>

         <Row className='table-title table-title-text'>
            <Col>
               {firstname} {lastname}
            </Col>

            <Col>
               <OverlayTrigger overlay={<Tooltip>Eliminar responsable</Tooltip>}>
                  <div className='icon-size float-right mr-4' onClick={() => { setModalDeleteResponsable(true); setResponsableData(id) }}><RiDeleteBin2Line id='delete-responsable' className='icon-styles' /></div>
               </OverlayTrigger>
               <OverlayTrigger overlay={<Tooltip>Agregar paciente</Tooltip>}>
                  <div className='icon-size float-right mr-5' onClick={() => { setModalProfileCreation(true); setResponsableData(id)}}><AiOutlineUserAdd id='add-profile' className='icon-styles' /></div>
               </OverlayTrigger>
            </Col>
         </Row>

         <Table className='table-style'>
            <thead>
               <tr>
                  <th>DNI</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Nacimiento</th>
                  <th></th>
               </tr>
            </thead>
            {
               profiles.map((pacienteInfo, index) => {
                  const { id, birthday, dni, firstname, lastname, profile_name, status, user_id } = pacienteInfo
                  return (
                     <tbody>
                        <tr>
                           <td>{dni}</td>
                           <td>{firstname}</td>
                           <td>{lastname}</td>
                           <td>{moment(birthday).format('DD/MM/YYYY')}</td>
                           <td>
                              <Row className='flex-row-reverse'>

                                 <OverlayTrigger overlay={<Tooltip>Eliminar paciente</Tooltip>}>
                                    <div className='icon-size' onClick={() => { setModalDeleteProfile(true); setProfileData(pacienteInfo) }}><BsPersonDash className='icon-styles' /></div>
                                 </OverlayTrigger>

                                 <OverlayTrigger overlay={<Tooltip>Asignar ejercicio</Tooltip>}>
                                    <div className='icon-size' onClick={() => { setModalExerciseAssignment(true); setProfileData(pacienteInfo) }}><GiInvertedDice5 className='icon-styles' /></div>
                                 </OverlayTrigger>

                                 <OverlayTrigger overlay={<Tooltip>Editar paciente</Tooltip>}>
                                    <div className='icon-size' onClick={() => { setModalProfileEdit(true); setProfileData(pacienteInfo) }}><FiEdit className='icon-styles' /></div>
                                 </OverlayTrigger>

                                 <OverlayTrigger overlay={<Tooltip>Asignar turno</Tooltip>}>
                                    <div className='icon-size' onClick={() => { setModalVisitAssignment(true); setProfileData(pacienteInfo) }}><BsCalendar className='icon-styles' /></div>
                                 </OverlayTrigger>

                              </Row>
                           </td>
                        </tr>
                     </tbody>
                  )
               }
               )
            }
         </Table>

         <ProfileCreationModal
               show={modalProfileCreation}
               onHide={() => setModalProfileCreation(false)}
               data={responsableData}
            />

         <ProfileEditModal
            data={profileData}
            show={modalProfileEdit}
            fetchData={fetchData}
            onHide={() => setModalProfileEdit(false)}
         />

         <ProfileExerciseAssignmentModal
            show={modalExerciseAssignment}
            exercises={exercises}
            data={profileData}
            fetchData={fetchData}
            onHide={() => setModalExerciseAssignment(false)}
         />

         <ProfileVisitAssignmentModal
            show={modalVisitAssignment}
            onHide={() => setModalVisitAssignment(false)}
         />

         <DeleteProfileModal
            show={modalDeleteProfile}
            data={profileData}
            onHide={() => setModalDeleteProfile(false)}
         />

         <DeleteResponsableModal
            show={modalDeleteResponsable}
            data={responsableData}
            onHide={() => setModalDeleteResponsable(false)}
         />
      </div>
   );


};

export default ResponsableTable;
