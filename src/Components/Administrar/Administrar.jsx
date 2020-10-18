import './Administrar.scss';
import {
  Button,
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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './AsignarEjercicios.scss'



const ResponsableTable = ({ id, nombre, apellido }) => {
   const idResp = id;

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

   return (
     <>
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
                              <td className='table-icon-section'>
                              <Button variant="primary" onClick={handleShow}>
                                 <OverlayTrigger overlay={<Tooltip>Asignar ejercicio</Tooltip>}>
                                    <GiInvertedDice5 className='icon-styles'/>
                                 </OverlayTrigger>
                              </Button>
                              <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Asignar ejercicios</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div className='cardsContainer'> 
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                                  <label class="custom-control-label" for="defaultUnchecked">Ejercicio Numero 1</label>
                                  </div>
                                    
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked2"/>
                                  <label class="custom-control-label" for="defaultUnchecked2">Ejercicio Numero 2</label>
                                  </div>
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked3"/>
                                  <label class="custom-control-label" for="defaultUnchecked3">Ejercicio Numero 3</label>
                                  </div>
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked4"/>
                                  <label class="custom-control-label" for="defaultUnchecked4">Ejercicio Numero 4</label>
                                  </div>

                              </Card>
                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked5"/>
                                  <label class="custom-control-label" for="defaultUnchecked5">Ejercicio Numero 5</label>
                                  </div>
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked6"/>
                                  <label class="custom-control-label" for="defaultUnchecked6">Ejercicio Numero 6</label>
                                  </div>
                              </Card>
                              </div>
                              </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                      </Button>
                                      <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                  
                              
                                 <OverlayTrigger overlay={<Tooltip>Editar paciente</Tooltip>}>
                                    <FiEdit className='icon-styles' />
                                 </OverlayTrigger>
                                 <OverlayTrigger overlay={<Tooltip>Asignar turno</Tooltip>}>
                                    <BsCalendar className='icon-styles' />
                                 </OverlayTrigger>
                              </td>
                           </tr>
                        </tbody>
                        
                     )
                  }
               })
            }
         </Table>
         

      </div>
      </>
   );
};



const Administrar = ({ }) => {
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
                     <h1>Administrar pacientes</h1>
                  </div>
               </div>
            </Row>

            <Row className='search-bar-container'>
               <AiOutlineSearch id='search-icon' />
               <input type="text" placeholder="Buscar responsable" className='search-bar' onChange={(e) => searchSpace(e)} />
            </Row>

            <Row>
               <div className='add-button'><IoMdAdd className='add-Icon' />Agregar responsable</div>
            </Row>

            <div className='tables-container'>
               {responsablesItem}
            </div>





         </Container>
      </div>
   );
};
export default Administrar;