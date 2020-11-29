import React, { useEffect } from 'react';
import UserCreationModal from './Modal/UserCreationModal'
import Loading from '../Loading/Loading'
import './Administrar.scss';
import {
   Container,
   Row,
} from 'react-bootstrap';
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { getAllMedicData, getAllExercises } from '../../Api/services/administrarServices';
import ResponsableTable from './ResponsableTable'

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
                  <div className='add-button' onClick={() => setModalShow(true)}><IoMdAdd className='add-Icon' />Agregar paciente</div>
                  <div className='add-button' onClick={() => setModalShow(true)}><IoMdAdd className='add-Icon' />Agregar</div>
               </Row>

               <UserCreationModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />

               <div className='tables-container'>
                  {
                     medicData.filter((data) => {
                        const {firstname, lastname} = data;
                        if (filter === null) return data;
                        else if (firstname.toLowerCase().includes(filter.toLowerCase()) || lastname.toLowerCase().includes(filter.toLowerCase())) {
                           return data;
                        }
                     }).map(data => <ResponsableTable {...data} exercises={exercises} />)
                  }
                  {medicData.length === 0 && (
                     <Container className='text-center'>
                           <div className='void-container'>
                              <h3>¡Ups! No hay pacientes</h3>
                           </div>
                        </Container>
                  )}
               </div>
            </Container>
         </div>
      );
   } else return (<Loading />)

};

export default Administrar;