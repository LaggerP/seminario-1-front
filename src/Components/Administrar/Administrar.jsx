import React from 'react';
import UserCreationModal from './Modal/UserCreationModal'
import ProfileEditModal from './Modal/ProfileEditModal'
import ProfileExerciseAssignmentModal from './Modal/ProfileExerciseAssignmentModal'
import ProfileVisitAssignmentModal from './Modal/ProfileVisitAssignmentModal'
import './Administrar.scss';
import {
   Container,
   Row,
   Table,
} from 'react-bootstrap';
import { PacientesMock, ResponsablesMock } from './PacientesMock'
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GiInvertedDice5 } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ResponsableTable = ({ id, nombre, apellido }) => {
   const idResp = id;
   const [modalProfileEdit, setModalProfileEdit] = React.useState(false);
   const [modalExerciseAssignment, setModalExerciseAssignment] = React.useState(false);
   const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);

   return (
      <div>
         <h2 className='table-title table-title-text'>{nombre} {apellido}</h2>


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
               PacientesMock.map((pacienteInfo, index) => {
                  if (pacienteInfo.idResponsable === idResp) {
                     return (
                        <tbody>
                           <tr>
                              <td>{pacienteInfo.documento}</td>
                              <td>{pacienteInfo.nombre}</td>
                              <td>{pacienteInfo.apellido}</td>
                              <td>{pacienteInfo.fechaNacimiento}</td>
                              <td>
                                 <Row className='flex-row-reverse'>
                                    <OverlayTrigger overlay={<Tooltip>Asignar ejercicio</Tooltip>}>
                                       <div className='icon-size' onClick={() => setModalExerciseAssignment(true)}><GiInvertedDice5 className='icon-styles' /></div>
                                    </OverlayTrigger>

                                    <OverlayTrigger overlay={<Tooltip>Editar paciente</Tooltip>}>
                                       <div className='icon-size' onClick={() => setModalProfileEdit(true)}><FiEdit className='icon-styles' /></div>
                                    </OverlayTrigger>

                                    <OverlayTrigger overlay={<Tooltip>Asignar turno</Tooltip>}>
                                       <div className='icon-size' onClick={() => setModalVisitAssignment(true)}><BsCalendar className='icon-styles' /></div>
                                    </OverlayTrigger>
                                 </Row>
                              </td>
                           </tr>
                        </tbody>
                     )
                  }
               })
            }
         </Table>

         <ProfileEditModal
            show={modalProfileEdit}
            onHide={() => setModalProfileEdit(false)}
         />

         <ProfileExerciseAssignmentModal
            show={modalExerciseAssignment}
            onHide={() => setModalExerciseAssignment(false)}
         />

         <ProfileVisitAssignmentModal
            show={modalVisitAssignment}
            onHide={() => setModalVisitAssignment(false)}
         />

      </div>
   );
};


const Administrar = ({ }) => {
   // Search bar
   const [filter, setFilter] = useState(null);
   const [modalShow, setModalShow] = React.useState(false);

   const searchSpace = (event) => {
      let keyword = event.target.value;
      setFilter(keyword);
   };

   const responsablesItem = ResponsablesMock.filter((data) => {
      if (filter === null) {
         return data;
      }
      else if (data.nombre.toLowerCase().includes(filter.toLowerCase()) || data.apellido.toLowerCase().includes(filter.toLowerCase())) {
         return data;
      }
   }).map(data => {
      return (
         <ResponsableTable {...data}></ResponsableTable>
      )
   });

   return (
      <div>
         <Container>
            <Row>
               <div className="AdministrarContainer-Bienvenida">
                  <div className="AdministrarContainer-Bienvenida-Texto">
                     <h1>Administrar pacientes</h1>
                  </div>
               </div>
            </Row>

            <Row className='search-bar-container'>
               <AiOutlineSearch id='search-icon' />
               <input type="text" placeholder="Buscar responsable" className='search-bar' onChange={(e) => searchSpace(e)} />
            </Row>

            <Row>
               <div className='add-button' onClick={() => setModalShow(true)}><IoMdAdd className='add-Icon' />Agregar responsable</div>
            </Row>

            <UserCreationModal
               show={modalShow}
               onHide={() => setModalShow(false)}
            />

            <div className='tables-container'>
               {responsablesItem}
            </div>
         </Container>
      </div>

   );
};

export default Administrar;