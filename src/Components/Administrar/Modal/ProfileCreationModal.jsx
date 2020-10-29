import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


const ProfileCreationModal = (props) => {
   const [profileData, setProfileData] = useState({
      profile_name: "",
      firstname: "",
      lastname: "",
      dni:"",
      birthday:""
   })

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
   }

   const addProfile = () => {
      props.setResponsableData({
         ...props.responsableData,
         profiles: profileData
      })
      props.onHide();
   }

   return (
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Creación Perfil Paciente
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Nombre del usuario del paciente</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre del usuario del paciente" name="profile_name" value={profileData.profile_name} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese DNI" name="dni" value={profileData.dni} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Fecha nacimiento</Form.Label>
                  <Form.Control type="date" placeholder="Fecha de nacimiento" name="birthday" value={profileData.birthday} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre(s)" name="firstname" value={profileData.firstname} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control type="text" placeholder="Apellido(s)" name="lastname" value={profileData.lastname} onChange={handleChange} />
               </Form.Group>
            </Form>

            <Button variant="info" size="sm" block onClick={() => addProfile()}>+ Agregar perfil</Button>{' '}
         </Modal.Body>
      </Modal>
   );
}


export default ProfileCreationModal