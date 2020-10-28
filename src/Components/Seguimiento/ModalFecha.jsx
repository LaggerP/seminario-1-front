import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'


const ProfileVisitAssignmentModal = (props) => {
   const [show, setShow] = useState(false);
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
                  <Col xs={12} md={6}>
                     <Button variant="info" size="sm" block onClick={() =>  setShow(false)}>Cerrar</Button>{' '}
                  </Col>
                  <Col xs={12} md={6}>
                     <Button variant="success" onClick={() => setShow(true)} size="sm" block >Buscar</Button>{' '}
                     <Alert show={show} variant="success">
                     
                     <p>
                        En el dia de la fecha realizo los ejercicios 5,4,2 del modulo 2

                     </p>
                     <hr />
                
                     </Alert>
                     
                  


                  
         
               </Col>
               </Row>
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default ProfileVisitAssignmentModal