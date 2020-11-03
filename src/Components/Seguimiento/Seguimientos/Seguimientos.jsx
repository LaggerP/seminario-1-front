import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'
import { updateStatus } from '../../../Api/services/exerciseServices'
import Form from 'react-bootstrap/Form'

import { getExercisesByProfile } from '../../../Api/services/exerciseServices'
   

const Seguimientos = ({goToExercise, name, description, image, module, finished, id, profiles}) => {
    const [consigna, setConsigna] = useState(false);
    const [profileData, setProfileData] = useState({
     visit_date: "",
    })
    const [showExercise, setShowExercise] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [allExercises, setAllExercises] = useState([]);
    const [dataExercise, setDataExercise] = useState();


    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
   }
    const addVisit = () => {
      var dateValue = document.querySelector('input[type="date"]').value;
      console.log(dateValue);
      
   };
 
   async function getExercisesData() {
      const data = await getExercisesByProfile(profileData.id)
      setExercises(data.profileExercises);
      setAllExercises(data.profileExercises);
   }
   useEffect(() => {
      getExercisesData();
   }, []);

    
      
    return (
      <div className="CardContainer" onClick={goToExercise} disabled>
    
       
   
         
       <Row>
       <Col xs={12} md={12}> 
       <Button variant="success" onClick={() => setConsigna(!consigna)} aria-controls="example-collapse-text"  aria-expanded={consigna} size="sm" block >Buscar</Button>{' '}
       <Collapse in={consigna}>
       <div id="example-collapse-text">
       <div className="CardContainer-Badges">
       <Form>
       <Form.Control type="date" name="visit_date" value={profileData.visit_date}  onChange={handleChange} required />
           En la fecha:  {(profileData.visit_date)} <br/> el parciente realizo los Ejercicios:  <Badge variant="info" >{id}</Badge>{' '}
           <br/>
           De los Módulos: {module} <Badge variant="warning" ></Badge>{' '}
         
     
           </Form>      
      </div>      
      
       </div> 
       </Collapse>
       </Col>
       </Row>    
       
        
      
       </div>

 


    )   
 };

 export default Seguimientos;