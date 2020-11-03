import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'
import EjercicioCard from './Seguimientos/Seguimientos';
import { id } from 'date-fns/locale';


   const ProfileVisitAssignmentModal = (props) => {
      const [consigna, setConsigna] = useState(false);
      const [profileData, setProfileData] = useState({
         visit_date: "",
       
      })

  
   
   const addVisit = () => {
      setConsigna(!consigna)
      const dateValue = document.querySelector('input[type="date"]').value;
      console.log(profileData.visit_date)
      console.log(dateValue)
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
               Buscar fecha
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{marginTop:0}}>
           
            
              
               </Form.Group>

   
             <EjercicioCard />
            
            </Form>
         </Modal.Body>
      </Modal> 
   );
   
}



export default ProfileVisitAssignmentModal