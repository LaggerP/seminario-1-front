import React from 'react';
<<<<<<< HEAD
import './Seguimiento.scss';
=======
import "./Seguimiento.scss"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
>>>>>>> b085af712ca36c68561845119c4814f6d0711b6a
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




<<<<<<< HEAD
const ResponsableTable = ({ id, nombre, apellido }) => {
   const idResp = id;
   const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);

=======
const { SearchBar } = Search;
const columns = [{
   dataField: 'id',
   text: 'DNI'
}, {
   dataField: 'name',
   text: 'Nombre del paciente'
}, {
   dataField: 'price',
   text: 'Modulo'
}, {
   dataField: 'price2',
   text: 'Ejercicios'
}, {
   dataField: 'price3',
   text: 'Tipo de tratamiento'
}, {
   dataField: 'price4',
   text: 'Fecha'
}];



const expandRow = {
   renderer: row => (
      <div>
         <p>{`Modulo y ejercicios asignados debido al tratamiento correspondiente al paciente: ${row.name}`}</p>
         <p>Se le asignaron 5 ejercicios totales de 2 modulos diferentes:</p>
         <p>Modulo: 1 - Ejercicios: 2,1 y 7 || Modulo: 2 - Ejercicios: 2 y 8</p>
      </div>
   ),
   showExpandColumn: true,
   onExpand: (row, isExpand, rowIndex, e) => {
      console.log(row.id);
      console.log(isExpand);
      console.log(rowIndex);
      console.log(e);
   },
   onExpandAll: (isExpandAll, rows, e) => {
      console.log(isExpandAll);
      console.log(rows);
      console.log(e);
   }
};





const products = [{
   id: 26656263,
   name: 'Nicolas Camicha',
   price: '1',
   price2: '2,1,7',
   price3: 'Tratamiento complejo',
   price4: '21/10/2020'
}, {
   id: 26656263,
   name: 'Nicolas Camicha',
   price: '2',
   price2: '2,8',
   price3: 'Tratamiento complejo',
   price4: '18/10/2020'
}, {
   id: 36360943,
   name: 'Pablo Lagger',
   price: '1',
   price2: '2,1,7',
   price3: 'Tratamiento agudo',
   price4: '14/10/2020'
}, {
   id: 36360943,
   name: 'Pablo Lagger',
   price: '2',
   price2: '2,8',
   price3: 'Tratamiento agudo',
   price4: '24/10/2020'
}, {
   id: 22511669,
   name: 'Matias Cardozo',
   price: '1',
   price2: '2,1,7',
   price3: 'Tratamiento severo',
   price4: '11/10/2020'

}, {
   id: 22511669,
   name: 'Matias Cardozo',
   price: '2',
   price2: '2,8',
   price3: 'Tratamiento grave',
   price4: '09/10/2020'
}, {
   id: 24551515,
   name: 'Matias Cardozo',
   price: '1',
   price2: '2,1,7',
   price3: 'Tratamiento severo',
   price4: '11/10/2020'
}, {
   id: 24551515,
   name: 'Matias Cardozo',
   price: '2',
   price2: '2,8',
   price3: 'Tratamiento severo',
   price4: '11/10/2020'


}];
>>>>>>> b085af712ca36c68561845119c4814f6d0711b6a

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

<<<<<<< HEAD

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

=======
const Seguimiento = () => {
>>>>>>> b085af712ca36c68561845119c4814f6d0711b6a
   return (
      <div>
         <Container>
            <Row>
<<<<<<< HEAD
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
      
=======
               <div className="SeguimientoContainer-Bienvenida">
                  <div className="SeguimientoContainer-Bienvenida-Texto">
                     <h1>Historial del paciente</h1>
                  </div>
                  <div className="SeguimientoContainer-Bienvenida-Imagen">
                     <img src={Seguimientoimagee} height='500px' alt="Seguimientoimagee" />
                  </div>
               </div>
            </Row>
            <div className='cardsContainer'>
               <ToolkitProvider
                  keyField="id"
                  columns={columns}
                  data={products}
                  search
               >
                  {
                     props => (
                        <div>
                           <h3>Buscar pacientes:</h3>
                           <SearchBar {...props.searchProps}
                              placeholder='Ingrese nombre del paciente...'
                              style={{width:350}}
                           />
                           <hr />
                           <BootstrapTable
                              {...props.baseProps}
                              expandRow={expandRow}
                           />
                        </div>
                     )
                  }
               </ToolkitProvider>
            </div>
         </Container>
      </div>
   );
};

>>>>>>> b085af712ca36c68561845119c4814f6d0711b6a

   );
};

export default Seguimiento;
