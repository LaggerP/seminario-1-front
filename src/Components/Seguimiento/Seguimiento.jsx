import React from 'react';
import './Seguimiento.scss';
import {
   Container,
   Row,
   Table,
} from 'react-bootstrap';
import { PacientesMock, ResponsablesMock } from './PacientesMock_seguimiento'
import { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProfileVisitAssignmentModal from './ModalFecha';




const ResponsableTable = ({ id, nombre, apellido }) => {
   const idResp = id;
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
                  <th>Tipo de Tratamiento</th>
                  
                 
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
                              <td>{pacienteInfo.TipoTratamiento}</td>
                             
                              <td>
                              <Row className='flex-row-reverse'>
                              <OverlayTrigger overlay={<Tooltip>Filtrar fecha</Tooltip>}>
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
         <ProfileVisitAssignmentModal
            show={modalVisitAssignment}
            onHide={() => setModalVisitAssignment(false)}
         />
         

      </div>
   );
};


const Seguimiento = ({ }) => {
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
