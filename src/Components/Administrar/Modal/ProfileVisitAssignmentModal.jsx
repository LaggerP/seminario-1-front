import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


const ProfileVisitAssignmentModal = (props) => {
   const [profileData, setProfileData] = useState({
      visit_date:"",
      visit_time:""
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
      var timeValue = document.querySelector('input[type="time"]').value;
      console.log(dateValue, timeValue);
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
               Asignar turno
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {/*onSubmit={handleSubmit} */}
            <Form>
               <Form.Group controlId="">
                  <Form.Label>Fecha del Turno</Form.Label>
                  <Form.Control type="date" name="visit_date" value={profileData.visit_date} onChange={handleChange} required/>
               </Form.Group>
               <Form.Group controlId="">
                  <Form.Label>Hora del Turno</Form.Label>
                  <Form.Control type="time" name="visit_time" value={profileData.visit_time} onChange={handleChange} required/>
               </Form.Group>
               <Button variant="success" /*type="submit"*/ size="sm" block onClick={() => addVisit()} >+ Agregar Turno</Button>{' '}
            </Form>
         </Modal.Body>
      </Modal>
   );
}


export default ProfileVisitAssignmentModal