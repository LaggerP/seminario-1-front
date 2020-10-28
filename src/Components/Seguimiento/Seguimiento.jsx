import React from 'react';

import './Seguimiento.scss';
import {
   Container,
   Row,
   Table,
} from 'react-bootstrap';
import { PacientesMock, ResponsablesMock } from './PacientesMock_seguimiento'
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
                  <th>Ejercicios</th>
                  <th>Modulos</th>
                  <th>Tipo de Tratamiento</th>
                  <th>Fecha de Realizacion</th>
                 
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
                              <td>{pacienteInfo.ejercicio}</td>
                              <td>{pacienteInfo.Modulo}</td>
                              <td>{pacienteInfo.TipoTratamiento}</td>
                              <td>{pacienteInfo.fecharealizada}</td>
                           </tr>
                        </tbody>
                     )
                  }
               })
            }
         </Table>


      </div>
   );
};


const Seguimiento = ({ }) => {
   // Search bar
   const [filter, setFilter] = useState(null);
   

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
                     <h1>Historial de pacientes</h1>
                  </div>
               </div>
            </Row>

            <Row className='search-bar-container'>
               <AiOutlineSearch id='search-icon' />
               <input type="text" placeholder="Buscar responsable" className='search-bar' onChange={(e) => searchSpace(e)} />
            </Row>


            <div className='tables-container'>
               {responsablesItem}
            </div>
         </Container>
      </div>

   );
};

export default Seguimiento;