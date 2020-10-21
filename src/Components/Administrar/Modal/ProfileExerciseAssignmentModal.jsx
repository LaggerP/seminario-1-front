import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ProfileExerciseAssignmentModal.scss'
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import { colourOptions } from './data'



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)

const ProfileExerciseAssignmentModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { props.onHide() };
  const [selectedOption, setSelectedOption] = useState(true);

  class SelectPage extends Component {
    render() {
      return (
        <div>

          <select className="browser-default custom-select">
            <option>Seleccione el modulo:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>

          </select>
        </div>
      );
    }
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

        <div className='cardsContainer'>
          <Card className=''>
            <SelectPage />
            <br />
            <Select
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />

          </Card>
        </div>


      </Modal.Body>

      <Modal.Footer>
        <Button variant="info" size="sm" onClick={handleClose}>
          Cerrar
              </Button>
        <Button variant="success" size="sm" onClick={handleClose}>
          Guardar cambios
              </Button>
      </Modal.Footer>
    </Modal>


  );
}

export default ProfileExerciseAssignmentModal
