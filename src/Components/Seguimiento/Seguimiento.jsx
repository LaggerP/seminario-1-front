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
import ResponsableTable from '../Seguimiento/Responsable_Table';
import { getProfileData, getRol } from '../../Api/services/authService'
import Loading from "../Loading/Loading";
import Seguimiento_VistaPaciente from './Seguimiento_VistaPaciente'
import Seguimientoimagee from '../../assets/images/Seguimientoimagee.png'




const Seguimiento = ({ }) => {
   // Search bar

   const [filter, setFilter] = useState(null);
   const [modalShow, setModalShow] = React.useState(false);
   const [showData, setShowData] = React.useState(false);
   const [medicData, setMedicData] = React.useState({});
   const [exercises, setExercises] = useState({});
   const rol = getRol();
   const [profileData, setProfileData] = React.useState({});
   React.useEffect(function effectFunction() {
      fetchData();
   }, []);


   async function fetchData() {
      let exercisesByModule = []
      const _medicData = await getAllMedicData();
      const _exercises = await getAllExercises();
      const _profileData = await getProfileData();
      _exercises.data.modules.map(module => {
         module.exercises.map(exercise => {
            let data = { module: module.moduleName, value: exercise.id, label: exercise.name, color: '#00B8D9', isFixed: true };
            exercisesByModule.push(data)
         })
      })
      setMedicData(_medicData);
      setProfileData(_profileData);
      setExercises(exercisesByModule);
      setShowData(true)
   }




   const searchSpace = (event) => {
      let keyword = event.target.value;
      setFilter(keyword);
   };

   if (rol == 2) {
      if (showData) {
         return (
            <div>
               <Container>
                  <Row>
                     <div className="SeguimientoContainer2-Bienvenida">
                        <div className="SeguimientoContainer2-Bienvenida-Texto">
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
                           const { firstname, lastname } = data;
                           if (filter === null) return data;
                           else if (firstname.toLowerCase().includes(filter.toLowerCase()) || lastname.toLowerCase().includes(filter.toLowerCase())) {
                              return data;
                           }
                        }).map(data => <ResponsableTable {...data}  />)
                     }
                  </div>
               </Container>



            </div>
         );
      } else return (<Loading />)
   } else {
      return (
         <div>
            <Container>
               <Row>
                  <div className="SeguimientoContainer2-Bienvenida">
                     <div className="SeguimientoContainer2-Bienvenida-Texto">
                        <h1>Bienvenido a tu historial</h1>
                     </div>
                     <div className="SeguimientoContainer-Bienvenida-Imagen">
                        <img src={Seguimientoimagee} height='480px' alt="Seguimientoimagee" />
                     </div>
                  </div>
               </Row>
               <div className='tables-container'>
                  <Seguimiento_VistaPaciente profileData={profileData}  />
               </div>
            </Container>
         </div>
      );
   }
};
export default Seguimiento;