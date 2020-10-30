import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Collapse from 'react-bootstrap/Collapse'


const ProfileVisitAssignmentModal = (props) => {
   const [open, setOpen] = useState(false);
   const [profileData, setProfileData] = useState({
      visit_date: "",
   
   })

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });
   }

   // const handleSubmit = () => {
   //    // addVisit();
   //    var dateValue = document.querySelector('input[type="date"]').value;
   //    var timeValue = document.querySelector('input[type="time"]').value;
   //    console.log(dateValue, timeValue);
   //    props.onHide()
   // }


   
   const addVisit = () => {
      var dateValue = document.querySelector('input[type="date"]').value;
      console.log(dateValue);
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
            {/*onSubmit={handleSubmit} */}
            <Form>
               <Form.Group controlId="" style={{marginTop:0}}>
                  <Form.Label>Fecha en la que se realizo en el ejercicio</Form.Label>
                  <Form.Control type="date" name="visit_date" value={profileData.visit_date} onChange={handleChange} required />
               </Form.Group>
              
               <Row>
                  <Col xs={12} md={12}>
                     <Button variant="success" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} size="sm" block >Buscar</Button>{' '}
                     <Collapse in={open}>
                     <div id="example-collapse-text">
                       El dia de la fecha el paciente realizo los ejercicios: 2 - 5 - 4 del modulo: 3
                     </div>
                     </Collapse>
                  
                    
                     
                  


                  
         
               </Col>
               </Row>
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default ProfileVisitAssignmentModal