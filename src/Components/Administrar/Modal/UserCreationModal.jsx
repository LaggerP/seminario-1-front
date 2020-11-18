import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
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
   const [profiles, setProfiles] = useState([]);

   const { addToast } = useToasts()

   const [createdProfiles, setcreatedProfiles] = useState([]);


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
      responsableData.profiles = profiles;

      const newUser = await register(responsableData);
      if (newUser.status === 201) {
         addToast('Se creó el usuario, el mismo debe revisar su email para tener las credencias de acceso', { appearance: 'success', autoDismiss: true, })
         setTimeout(() => { window.location.reload(false) }, 5000);
      }
      else
         addToast('Ocurrió un error en la creación del usuario', { appearance: 'warning', autoDismiss: true, })
      setLoading(false)
      props.onHide();
   };

   const enabled =
      responsableData.username.length > 0 &&
      responsableData.first_name.length > 0 &&
      responsableData.last_name.length > 0 &&
      responsableData.email.length > 0 &&
      profiles.length > 0
      ;

   const enabledAdd =
      responsableData.username.length > 0 &&
      responsableData.first_name.length > 0 &&
      responsableData.last_name.length > 0 &&
      responsableData.email.length > 0
      ;


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
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre de usuario del responsable" name="username" value={responsableData.username} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Dirección de email</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese dirección de email" name="email" value={responsableData.email} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre(s)" name="first_name" value={responsableData.first_name} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control type="text" placeholder="Apellido(s)" name="last_name" value={responsableData.last_name} onChange={handleChange} required />
               </Form.Group>

               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Perfiles</Form.Label>
                  <Row>
                     <Col>
                        <Select
                           options={createdProfiles}
                           placeholder="Ver perfiles"
                        />
                     </Col>
                     <Col>
                        <Button variant="info" disabled={enabledAdd == false} block onClick={() => setModalShow(true)}>+ Agregar paciente</Button>{' '}
                     </Col>
                  </Row>
               </Form.Group>

            </Form>

            <Row>
               <Col>
                  <Button variant="success" disabled={enabled == false} onClick={() => createUser()} size="sm" block>{isLoading ? 'Creando usuario....' : 'Crear'}</Button>{' '}
               </Col>
            </Row>

            <ProfileCreationModal
               show={modalShow}
               responsableData={responsableData.profiles}
               setResponsableData={setResponsableData}
               profiles={profiles}
               setProfiles={setProfiles}
               onHide={() => setModalShow(false)}
               setcreatedProfiles={setcreatedProfiles}
            />
         </Modal.Body>
      </Modal>
   );
}


export default UserCreationModal