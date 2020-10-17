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
  text: 'Fecha'
}, {
  dataField: 'price',
  text: 'Modulo'
},{
   dataField: 'price2',
   text: 'Ejercicios'
}];







const products = [{
    id:  '21/10/2020', 
    price: '1', 
    price2: '2,1,7',
  
   },{
    id: '21/10/2020', 
    price: '2', 
    price2: '2,8',

     },{
    id: '14/10/2020', 
    price: '2',
    price2: '3',

   },{
    id: '11/10/2020',
    price: '3',
    price2: '4', 
 
 

   },{
    id: '09/10/2020',
    price: '1',
    price2: '5,6',

}];





const Seguimiento = () => {
   return (
      <div>    
         <Container>
            <Row> 
          <div className="SeguimientoContainer-Bienvenida">
          <div className="SeguimientoContainer-Bienvenida-Texto">
        <h1> Hisotrial del paciente: </h1>
         </div>
         <h2>Bienvenido a la pantalla de seguimiento de ejercicios</h2>

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
                  <h3>Buscar la fecha en la que se realizo tal ejercicio...:</h3>
                  <SearchBar { ...props.searchProps } 
                  className="custome-search-field"
                  placeholder = 'Ingrese fecha para buscar el ejercicio'
                  />
                  <hr />
                  <BootstrapTable
                     { ...props.baseProps }
                
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