import React from 'react';
import "./Seguimiento.scss" 
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {
   Container,
   Row,
} from 'react-bootstrap';
import Seguimientoimagee from '../../assets/images/Seguimientoimagee.png'

 


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
},{
   dataField: 'price2',
   text: 'Ejercicios'
},{
   dataField: 'price3',
   text: 'Tipo de tratamiento'
},{
   dataField: 'price4',
   text: 'Fecha'
}];



const expandRow = {
   renderer: row => (
     <div>
       <p>{ `Modulo y ejercicios asignados debido al tratamiento correspondiente al paciente: ${row.name}` }</p>
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
    id:  26656263, 
    name: 'Nicolas Camicha',
    price: '1', 
    price2: '2,1,7',
    price3: 'Tratamiento complejo',
    price4: '21/10/2020'
   },{
    id: 26656263, 
    name: 'Nicolas Camicha',
    price: '2', 
    price2: '2,8',
    price3: 'Tratamiento complejo',
    price4: '18/10/2020'
     },{
    id: 36360943, 
    name: 'Pablo Lagger',
    price: '1', 
    price2: '2,1,7',
    price3: 'Tratamiento agudo',
    price4: '14/10/2020'
   },{
      id: 36360943, 
      name: 'Pablo Lagger',
      price: '2', 
      price2: '2,8',
      price3: 'Tratamiento agudo',
      price4: '24/10/2020'
     },{
    id: 22511669,
    name: 'Matias Cardozo',
    price: '1', 
    price2: '2,1,7',
    price3: 'Tratamiento severo',
    price4: '11/10/2020'

   },{
    id: 22511669,
    name: 'Matias Cardozo',
    price: '2', 
    price2: '2,8',
    price3: 'Tratamiento grave',
    price4: '09/10/2020'
   },{
    id: 24551515,
    name: 'Matias Cardozo',
    price: '1', 
    price2: '2,1,7',
    price3: 'Tratamiento severo',
    price4: '11/10/2020'
   },{
      id: 24551515,
      name: 'Matias Cardozo',
      price: '2', 
      price2: '2,8',
      price3: 'Tratamiento severo',
      price4: '11/10/2020'

   
}];





const Seguimiento = () => {
   return (
      <div>   
         <Container>
            <Row> 
          <div className="SeguimientoContainer-Bienvenida">
          <div className="SeguimientoContainer-Bienvenida-Texto">
        <h1>Hisotrial del paciente:</h1>
         </div>
   

         <div className="SeguimientoContainer-Bienvenida-Imagen">
         <img src={Seguimientoimagee} height='340px' alt="Seguimientoimagee" />
         </div> 
         </div>
         </Row>      
         <div className='cardsContainer'>   
            <ToolkitProvider
            keyField="id"
            columns={ columns }
            data={ products }
            search
            
            >
            {
               props => (
                  <div>
                  <h3>Buscar pacientes:</h3>
                  <SearchBar { ...props.searchProps } 
                  placeholder = 'Ingrese nombre del paciente...'
                  />
                  <hr />
                  <BootstrapTable
                     { ...props.baseProps }
                     expandRow={ expandRow }
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



export default Seguimiento;