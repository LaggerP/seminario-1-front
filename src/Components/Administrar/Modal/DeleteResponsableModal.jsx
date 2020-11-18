import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { deleteResponsable } from '../../../Api/services/administrarServices'
import { useToasts } from 'react-toast-notifications'


const DeleteResponsableModal = (props) => {
   const { addToast } = useToasts();

   const DeleteResponsable = async () => {
      const id = props.data
      const _deletedResponsable = await deleteResponsable(id);
      if (_deletedResponsable.status === 201) {
         addToast('Se eliminó el responsable', { appearance: 'success', autoDismiss: true, })
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
               Eliminar responsable
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <p className='text-center'> ¿Desea eliminar al responsable?</p>
               <br/>
               <Row>
                  <Col xs={12} md={6}>
                     <Button variant="info" size="sm" block onClick={() => props.onHide()}>Cerrar</Button>{' '}
                  </Col>
                  <Col xs={12} md={6}>
                     <Button variant="danger" onClick={() => DeleteResponsable()} size="sm" block>Eliminar</Button>{' '}
                  </Col>
               </Row>
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default DeleteResponsableModal