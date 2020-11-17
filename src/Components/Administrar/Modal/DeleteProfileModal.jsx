import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { deleteProfile } from '../../../Api/services/administrarServices'
import { useToasts } from 'react-toast-notifications'


const DeleteProfileModal = (props) => {
   const { addToast } = useToasts();

   const deleteSelectedProfile = async () => {
      const id = props.data.id
      const _deletedProfile = await deleteProfile(id);
      if (_deletedProfile.status === 201) {
         addToast('Se eliminó el perfil', { appearance: 'success', autoDismiss: true, })
         setTimeout(() => { window.location.reload(false) }, 2000);
       } else {
         addToast('Hubo un error. Intente nuevamente', { appearance: 'warning', autoDismiss: true, })
       }
       props.onHide()
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
               Eliminación de paciente
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <p>¿Desea realmente eliminar este perfil?</p>
               <br/>
               <Row>
                  <Col xs={12} md={6}>
                     <Button variant="info" size="sm" block onClick={() => props.onHide()}>Cerrar</Button>{' '}
                  </Col>
                  <Col xs={12} md={6}>
                     <Button variant="danger" onClick={() => deleteSelectedProfile()} size="sm" block>Eliminar perfil</Button>{' '}
                  </Col>
               </Row>
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default DeleteProfileModal