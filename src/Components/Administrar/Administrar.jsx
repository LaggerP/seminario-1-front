<<<<<<< HEAD
=======
import React from 'react';
import Button from 'react-bootstrap/Button'
import UserCreationModal from './Modal/UserCreationModal'
>>>>>>> cc97e23aae79b0a43fccde9d174b657e9fe4f25f
import './Administrar.scss';
import {
  Button,
   Container,
   Row,
   Table,
   Form,
   FormGroup
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
                              <Button variant='white' onClick={handleShow}>
                                 <OverlayTrigger overlay={<Tooltip>Asignar ejercicio</Tooltip>}>
                                    <GiInvertedDice5 className='icon-styles' />
                                 </OverlayTrigger>
                              </Button>
                              <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Asignar ejercicios</Modal.Title>
                              </Modal.Header>
                              <FormGroup>
                              <Modal.Body>
                                 
                                <div className='cardsContainer'> 
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox"  id="defaultUnchecked"/>
                                  <label  for="defaultUnchecked">Ejercicio Numero 1</label>
                                  </div>
                                  
                                    
                              </Card>
                             

                              <br/>
                              <FormGroup>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox"  id="customControlAutosizing"/>
                                  <label  for="customControlAutosizing">Ejercicio Numero 2</label>
                                  </div>
                              </Card>
                              
                              </FormGroup>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" id="defaultUnchecked3"/>
                                  <label  for="defaultUnchecked3">Ejercicio Numero 3</label>
                                  </div>
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" id="defaultUnchecked4"/>
                                  <label  for="defaultUnchecked4">Ejercicio Numero 4</label>
                                  </div>

                              </Card>
                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox"  id="defaultUnchecked5"/>
                                  <label  for="defaultUnchecked5">Ejercicio Numero 5</label>
                                  </div>
                              </Card>

                              <br/>
                              <Card className ='Ejercicios'>
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox"  id="defaultUnchecked6"/>
                                  <label  for="defaultUnchecked6">Ejercicio Numero 6</label>
                                  </div>
                              </Card>
                              </div>
                              </Modal.Body>
                              </FormGroup>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                      </Button>
                                      <Button variant="primary" onClick={handleClose}>
                                        Guardar cambios
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
               {responsablesItem}
            </div>
         </Container>
      </div>

   );
};
export default Administrar;