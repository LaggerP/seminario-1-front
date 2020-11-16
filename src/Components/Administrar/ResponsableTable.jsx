import React, { useEffect } from 'react';
import ProfileEditModal from './Modal/ProfileEditModal'
import ProfileExerciseAssignmentModal from './Modal/ProfileExerciseAssignmentModal'
import ProfileVisitAssignmentModal from './Modal/ProfileVisitAssignmentModal'
import './Administrar.scss';
import {
   Row,
   Table,
} from 'react-bootstrap';
import { GiInvertedDice5 } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ResponsableTable = ({ id, username, email, firstname, lastname, profiles, exercises, fetchData }) => {
   const [modalProfileEdit, setModalProfileEdit] = React.useState(false);
   const [modalExerciseAssignment, setModalExerciseAssignment] = React.useState(false);
   const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);
   const [profileData, setProfileData] = React.useState()

   return (
      <div>
         <h2 className='table-title table-title-text'>{firstname} {lastname}</h2>

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
                           <td>{birthday}</td>
                           <td>
                              <Row className='flex-row-reverse'>
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
            data={profileData} //Le estoy mandando todo esta data: { id, birthday, dni, firstname, lastname, profile_name, status, user_id }
            fetchData={fetchData}
            onHide={() => setModalVisitAssignment(false)}
         />
      </div>
   );


};

export default ResponsableTable;
