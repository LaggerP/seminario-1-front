import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import './ProfileExerciseAssignmentModal.scss'
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import { getAllExercises, assignExercises } from '../../../Api/services/administrarServices';
import { useToasts } from 'react-toast-notifications'



const ProfileExerciseAssignmentModal = (props) => {
  console.log(props)
  const [show, setShow] = useState(false);
  const handleClose = () => { props.onHide() };
  const [selectedOption, setSelectedOption] = useState([]);
  const { addToast } = useToasts()

  const selectExercises = async (exercise) => { 
    await setSelectedOption(exercise)  
  };

  const confirmSelection = async () => { 
    
    let data = {
      profile_id: props.data.id,
      selectedOption: selectedOption
    }
    const _response = await assignExercises(data);
    if (_response.status === 201) {
      addToast('Se asignaron los ejercicios de forma correcta', { appearance: 'success', autoDismiss: true, })
    } else {
      addToast('Hubo un error. Intente nuevamente', { appearance: 'success', autoDismiss: true, })
    }
    props.onHide()

  };



  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Asignar ejercicios
         </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="" style={{ marginTop: 0 }}>
            <select className="browser-default custom-select">
              <option>Seleccione el modulo:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>

            </select>
            <br />
            <br />
            <Select
              isMulti
              name="exercises"
              options={props.exercises}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={selectExercises}
            />

          </Form.Group>


          <Row>
            <Col xs={12} md={6}>
              <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
            </Col>
            <Col xs={12} md={6}>
              <Button variant="success" onClick={()=> confirmSelection()} size="sm" block>Guardar selección</Button>{' '}
            </Col>
          </Row>
        </Form>

      </Modal.Body>
    </Modal>


  );
}

export default ProfileExerciseAssignmentModal
