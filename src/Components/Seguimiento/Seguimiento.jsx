import React from 'react';
import './Seguimiento.scss';
import {
   Container,
   Row,
   Table,
} from 'react-bootstrap';
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getAllMedicData, getAllExercises } from '../../Api/services/administrarServices';
import ResponsableTable from './ResponsableTable'
import { getRol } from '../../Api/services/authService'

  


const Seguimiento = ({ }) => {
   // Search bar
   const [filter, setFilter] = useState(null);
   const [modalShow, setModalShow] = React.useState(false);
   const [showData, setShowData] = React.useState(false);
   const [medicData, setMedicData] = React.useState({});
   const [exercises, setExercises] = useState({});
   const rol = getRol();

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
                     <h1>Historial de pacientes</h1>
                  </div>
               </div>
            </Row>

            <Row className='search-bar-container'>
               <AiOutlineSearch id='search-icon' />
               <input type="text" placeholder="Buscar responsable" className='search-bar' onChange={(e) => searchSpace(e)} />
              
            </Row>
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
               </div>
            </Container>
      
         </div>
      

      );
   } else return (<p>cargando</p>)

};

export default Seguimiento;
