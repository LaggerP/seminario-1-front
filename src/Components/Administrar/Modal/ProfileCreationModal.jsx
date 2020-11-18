import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import '../../Administrar/Administrar.scss';
import { createProfile } from '../../../Api/services/administrarServices';
import { useToasts } from 'react-toast-notifications'


const ProfileCreationModal = (props) => {
   let initialState = {
      profile_name: "",
      firstname: "",
      lastname: "",
      dni: "",
      birthday: ""
   }

   const [profileData, setProfileData] = useState(initialState)

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
   }

   const { addToast } = useToasts()

   const addProfile = () => {
      let selectData = { value: profileData.profile_name, label: profileData.profile_name, color: '#00B8D9', isFixed: true };
      if (props.setcreatedProfiles == undefined) {
         let profileInfo = {
            user_id: props.data,
            profile_name: profileData.profile_name,
            firstname: profileData.firstname,
            lastname: profileData.lastname,
            dni: profileData.dni,
            birthday: profileData.birthday
         };
         createProfile(profileInfo);
         setProfileData(initialState)
         props.onHide();
         addToast('Se ha creado el paciente', { appearance: 'success', autoDismiss: true, })
         setTimeout(() => { window.location.reload(false) }, 1500);
      } else {
         props.setcreatedProfiles(prevItems => [...prevItems, selectData]);
         props.setProfiles(prevItems => [...prevItems, profileData]);
         setProfileData(initialState)
         props.onHide();
      }
   }

   const enabled =
      profileData.profile_name.length > 0 &&
      profileData.firstname.length > 0 &&
      profileData.lastname.length > 0 &&
      profileData.dni.length > 0 &&
      profileData.birthday.length > 0
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
               Creación Perfil Paciente
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Nombre del usuario del paciente</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre de usuario del paciente" name="profile_name" value={profileData.profile_name} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control type="number" placeholder="Ingrese DNI" name="dni" value={profileData.dni} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Fecha nacimiento</Form.Label>
                  <Form.Control type="date" placeholder="Fecha de nacimiento" name="birthday" value={profileData.birthday} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese nombre(s)" name="firstname" value={profileData.firstname} onChange={handleChange} />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control type="text" placeholder="Apellido(s)" name="lastname" value={profileData.lastname} onChange={handleChange} />
               </Form.Group>
            </Form>
            <Button variant="info" disabled={enabled == false} size="sm" block onClick={() => addProfile()}>+ Agregar perfil</Button>{' '}
         </Modal.Body>
      </Modal>
   );
}

export default ProfileCreationModal