import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


const ProfileCreationModal = (props) => {
   console.log(props)
   const [profileData, setProfileData] = useState({
      profile_name: "",
      firstname: "",
      lastname: "",
   })

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
      console.log(profileData)
   }

   const addProfile = () => {
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
               <Form.Group controlId="">
                  <Form.Label>Nombre del usuario del paciente</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre del usuario del paciente" name="profile_name" value={profileData.profile_name} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="">
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre(s)" name="firstname" value={profileData.firstname} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="">
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