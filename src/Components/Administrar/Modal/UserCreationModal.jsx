import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import ProfileCreationModal from './ProfileCreationModal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";
import { register } from '../../../Api/services/authService'
import { getUserDBId } from '../../../Api/services/authService'
import { useToasts } from 'react-toast-notifications'


const popover = (
   <Popover id="popover-basic">
      <Popover.Title as="h4">Información importante</Popover.Title>
      <Popover.Content>
         ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! en los siguientes campos debe completar los datos correspondientes a la persona <strong>a cargo del paciente</strong>. <br />
            Puede crear nuevos pacientes presionando el botón de <strong>"Agregar paciente"</strong>
      </Popover.Content>
   </Popover>
);

const UserCreationModal = (props) => {
   const [modalShow, setModalShow] = React.useState(false);
   const [isLoading, setLoading] = useState(false);
   const [responsableData, setResponsableData] = useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      profiles: []
   })
   
   const { addToast } = useToasts()

   const handleChange = (e) => {
      const { name, value } = e.target;
      setResponsableData({
         ...responsableData,
         [name]: value
      });
   }

   const createUser = async () => {
      setLoading(true)
      responsableData.medicDBId = getUserDBId();
      await register(responsableData).then((response) => {
         setLoading(false);
         addToast('Se creó el usuario, el mismo debe revisar su email para tener las credencias de acceso', { appearance: 'success', autoDismiss: true, })
         props.onHide();
         setTimeout(()=> { window.location.reload(false)}, 3000);
      }).catch((error) => console.log(error.response));
   };

   return (
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Creación Responsable
               <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                  <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
               </OverlayTrigger>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre de usuario" name="username" value={responsableData.username} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Dirección de email</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese dirección de email" name="email" value={responsableData.email} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre(s)" name="first_name" value={responsableData.first_name} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control type="text" placeholder="Apellido(s)" name="last_name" value={responsableData.last_name} onChange={handleChange} required />
               </Form.Group>
            </Form>

            <Row>
               <Col xs={12} md={6}>
                  <Button variant="info" size="sm" block onClick={() => setModalShow(true)}>+ Agregar paciente</Button>{' '}

               </Col>
               <Col xs={12} md={6}>
                  <Button variant="success" onClick={() => createUser()} size="sm" block>{isLoading ? 'Creando usuario....' : 'Crear'}</Button>{' '}
               </Col>
            </Row>



            <ProfileCreationModal
               show={modalShow}
               responsableData={responsableData}
               setResponsableData={setResponsableData}
               onHide={() => setModalShow(false)}
            />
         </Modal.Body>
      </Modal>
   );
}


export default UserCreationModal