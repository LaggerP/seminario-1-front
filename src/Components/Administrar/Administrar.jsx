import React, { useEffect } from 'react';
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
import { getAllMedicData, getAllExercises } from '../../Api/services/administrarServices';
import { format } from "date-fns";

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
            onHide={() => setModalVisitAssignment(false)}
         />

      </div>
   );


};


const Administrar = ({ }) => {
   // Search bar
   const [filter, setFilter] = useState(null);
   const [modalShow, setModalShow] = React.useState(false);
   const [showData, setShowData] = React.useState(false);
   const [medicData, setMedicData] = React.useState({});
   const [exercises, setExercises] = useState({});


   React.useEffect(function effectFunction() {
      fetchData();
   }, []);


   async function fetchData() {
      let exercisesByModule = []
      const _medicData = await getAllMedicData();
      const _exercises = await getAllExercises();
      _exercises.data.modules.map(module => {
            module.exercises.map(exercise => {
               let data = {module:module.moduleName, value: exercise.id, label: exercise.name, color: '#00B8D9', isFixed: true };
               exercisesByModule.push(data)
            })
      })
      setMedicData(_medicData);
      setExercises(exercisesByModule);
      setShowData(true)
   }

   const searchSpace = (event) => {
      let keyword = event.target.value;
      setFilter(keyword);
   };

   if (showData) {
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

                  {
                     medicData.filter((data) => {
                        if (filter === null) {
                           return data;
                        }
                        else if (data.firstname.toLowerCase().includes(filter.toLowerCase()) || data.lastname.toLowerCase().includes(filter.toLowerCase())) {
                           return data;
                        }
                     }).map(data => {
                        return (
                           <ResponsableTable {...data} exercises={exercises}></ResponsableTable>
                        )
                     })
                  }

               </div>
            </Container>
         </div>

      );
   } else {

      return (<p>cargando</p>)
   }

};

export default Administrar;