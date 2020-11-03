import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'

import Seguimientos from './Seguimientos/Seguimientos';

import { getExercisesByProfile } from '../../Api/services/exerciseServices'


   const ProfileVisitAssignmentModal = (props) => {
      const [consigna, setConsigna] = useState(false);
      const [showExercise, setShowExercise] = useState(true);
      const [selectedOption, setSelectedOption] = useState(null);
      const [exercises, setExercises] = useState([]);
      const [allExercises, setAllExercises] = useState([]);
      const [dataExercise, setDataExercise] = useState();
      const [profileData, setProfileData] = useState({
         visit_date: "",
         exercises: "",
         module: "",
       
      })

  
   
   const addVisit = () => {
      setConsigna(!consigna)
      const dateValue = document.querySelector('input[type="date"]').value;
      console.log(profileData.visit_date)
      console.log(dateValue)
      props.onHide()

   }


   const getGameData = async (e) => {
      await setDataExercise(e);
      setShowExercise(false);
      const exerciseDone = documen.querySelector('input[type="exercise"]').value;
      console.log(profileData.exerciseDone)
    
   }
   async function getExercisesData() {
      const data = await getExercisesByProfile(profileData.id)
      
      setExercises(data.profileExercises);
      setAllExercises(data.profileExercises);
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
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
               Buscar fecha
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{marginTop:0}}>
           
            <h1>Seleccionar fecha</h1>
              
               </Form.Group>
  
               <Row>
       <Col xs={12} md={12}> 
       <Button variant="success" onClick={() => setConsigna(!consigna)} aria-controls="example-collapse-text"  aria-expanded={consigna} size="sm" block >Abrir calendario</Button>{' '}
       <Collapse in={consigna}>
       <div id="example-collapse-text">
       <div className="CardContainer-Badges">
       <Form>
       <Form.Control type="date" name="visit_date" value={profileData.visit_date}  onChange={handleChange} required />
      
           En la fecha:  {(profileData.visit_date)} <br/> el parciente realizo los Ejercicios: <Badge variant="info" >{profileData.exercises}</Badge>{' '}
           <br/>
           De los Módulos: <Badge variant="warning" >{profileData.module}</Badge>{' '}
 
     
           </Form>      
      </div>      
      
       </div> 
       </Collapse>
       </Col>
       </Row>    

               <Row style={{ paddingTop: '2.5%' }}>
                     {
                        exercises.map((data, index) => {
                           const { id, name, description, consigna, image, module, finished } = data
                           console.log(image)
                           return (
                              <Col xs={12} md={4} key={data.id} value={data} onClick={() => { getGameData(data) }}>
                                 <Seguimientos
                                    name={name}
                                    description={description}
                                    consigna={consigna}
                                    module={module}
                                    finished={finished}
                                    image={image}
                                    id={id}
                                 />
                              </Col>
                           )
                        })
                     }
                  </Row>
            
            </Form>
         </Modal.Body>
      </Modal> 
   );
   
}



export default ProfileVisitAssignmentModal