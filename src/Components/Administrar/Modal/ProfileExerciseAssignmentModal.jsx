import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ProfileExerciseAssignmentModal.scss'
import Card from 'react-bootstrap/Card';




const ProfileExerciseAssignmentModal = (props) => {
   const [show, setShow] = useState(false);
   const [profileData, setProfileData] = useState({
      profile_name: "",
      firstname: "",
      lastname: "",
      dni:"",
      birthday:""
   })

const handleClose = () => setShow(true);
const handleShow = () => setShow(true);





  




   return (
      <Modal 
      {...props}
      size='md'
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
    
      <Modal.Header closeButton>
        <Modal.Title id= "contained-modal-title-vcenter">
           Asignar ejercicios
         </Modal.Title>
     
      </Modal.Header>
      <Modal.Body>
         
        <div className='cardsContainer'> 
      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox"  id="defaultUnchecked"/>
          <label  for="defaultUnchecked">Ejercicio Numero 1</label>
          </div>
            
      </Card>

   
      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox"  id="customControlAutosizing"/>
          <label  for="customControlAutosizing">Ejercicio Numero 2</label>
          </div>
      </Card>

      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox" id="defaultUnchecked3"/>
          <label  for="defaultUnchecked3">Ejercicio Numero 3</label>
          </div>
      </Card>
      
      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox" id="defaultUnchecked4"/>
          <label  for="defaultUnchecked4">Ejercicio Numero 4</label>
          </div>

      </Card>
      
      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox"  id="defaultUnchecked5"/>
          <label  for="defaultUnchecked5">Ejercicio Numero 5</label>
          </div>
      </Card>
        
      <Card className ='Ejercicios'>
      <div class="custom-control custom-checkbox">
          <input type="checkbox"  id="defaultUnchecked6"/>
          <label  for="defaultUnchecked6">Ejercicio Numero 6</label>
          </div>
      </Card>

      </div>
      </Modal.Body>

          <Modal.Footer>      
            <Button variant="info" size="sm" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="info" size="sm" onClick={handleClose}>
                Guardar cambios
              </Button>
            </Modal.Footer>
          </Modal>
         

   );
}


export default ProfileExerciseAssignmentModal