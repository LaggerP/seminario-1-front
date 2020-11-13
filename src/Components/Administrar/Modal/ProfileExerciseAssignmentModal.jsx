import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import './ProfileExerciseAssignmentModal.scss'
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import { assignExercises } from '../../../Api/services/administrarServices';
import { useToasts } from 'react-toast-notifications'

const options = [
  { value: 'Todos', label: 'Todos los módulos' },
  { value: 'Contador', label: 'Módulo Contador' },
  { value: 'Lectura', label: 'Módulo Lectura' },
];

const ProfileExerciseAssignmentModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { props.onHide() };
  const [selectedOption, setSelectedOption] = useState([]);
  const { addToast } = useToasts();
  const [exercises, setExercises] = useState(props.exercises);
  const [allExercises, setAllExercises] = useState(props.exercises);


  const selectExercises = async (exercise) => {
    await setSelectedOption(exercise);
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
      addToast('Hubo un error. Intente nuevamente', { appearance: 'warning', autoDismiss: true, })
    }
    props.onHide()
  };

  const changeModule = async (e) => {
    setSelectedOption(e.value)
    const _exercises = await allExercises.filter(exercise => (exercise.module === e.value))
    _exercises.length === 0 ? setExercises(allExercises) : setExercises(_exercises)
 }

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
            <Select
              defaultValue={selectedOption}
              onChange={changeModule}
              options={options}
              placeholder="Filtrar por módulo"
            />
            <br/>
            <Select
              isMulti
              name="exercises"
              options={exercises}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={selectExercises}
              placeholder="Seleccionar ejercicios"
            />
          </Form.Group>
          <Row>
            <Col xs={12} md={6}>
              <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
            </Col>
            <Col xs={12} md={6}>
              <Button variant="success" onClick={() => confirmSelection()} size="sm" block>Guardar selección</Button>{' '}
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileExerciseAssignmentModal
