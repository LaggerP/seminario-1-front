import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
import { assignTurn } from '../../../Api/services/administrarServices'
import { useToasts } from 'react-toast-notifications'
import { getUserDBId } from '../../../Api/services/authService';


const popover = (
   <Popover id="popover-basic">
      <Popover.Title as="h4">Información importante</Popover.Title>
      <Popover.Content>
         ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! Complete los siguientes campos para asignar un nuevo turno.
       </Popover.Content>
   </Popover>
);

const ProfileVisitAssignmentModal = (props) => {

   const { addToast } = useToasts()
   const [isLoading, setLoading] = useState(false);
   const [turnoData, setTurnoData] = useState({
      turn_date: "",
      turn_time: "",
      profile_id: "",
      user_id: "",
      comments: "",
   })

   const handleClose = () => { props.onHide() };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setTurnoData({
         ...turnoData,
         [name]: value
      });
   }

   const assignTurno = async () => {
      setLoading(true)

      let data = { //Aca guardo todos los datos que necesito, los imprimí arriba para comprobar que los tenía
         fecha: turnoData.turn_date,
         hora: turnoData.turn_time,
         profile_id: props.data.id,
         user_id: await parseInt(getUserDBId()),
         comentarios: turnoData.comments
      }

      const _turn = await assignTurn(data);
      if (_turn.status === 201) {
         addToast('Se creó el turno exitosamente', { appearance: 'success', autoDismiss: true, })
         setTimeout(() => { window.location.reload(false) }, 5000);
      } else
         addToast('Hubo un error al crear turno', { appearance: 'warning', autoDismiss: true, })

      props.onHide()
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
               Asignar turno
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Fecha del Turno</Form.Label>
                  <Form.Control type="date" name="turn_date" value={turnoData.turn_date} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Hora del Turno</Form.Label>
                  <Form.Control type="time" name="turn_time" value={turnoData.turn_time} onChange={handleChange} required />
               </Form.Group>
               <Form.Group controlId="" style={{ marginTop: 0 }}>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control as="textarea" rows={3} name="comments" value={turnoData.comments} onChange={handleChange} placeholder="Comentarios" />
               </Form.Group>
               <Row>
                  <Col xs={12} md={6}>
                     <Button variant="info" size="sm" block onClick={() => handleClose()}>Cerrar</Button>{' '}
                  </Col>
                  <Col xs={12} md={6}>
                     <Button variant="success" onClick={() => assignTurno()} size="sm" block>{isLoading ? 'Asignando turno....' : 'Asignar'}</Button>{' '}
                  </Col>
               </Row>
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default ProfileVisitAssignmentModal