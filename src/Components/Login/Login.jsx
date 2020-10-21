import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../Api/services/authService'

import './Login.scss';
import doctor from '../../assets/images/doctor.png'
import niños from '../../assets/images/niños.png'
import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";

const Login = (props) => {
   let history = useHistory();
   const [isLoading, setLoading] = useState(false);
   const [responsableData, setResponsableData] = useState({
      username: "",
      password: ""
   })

const [validated, setValidated] = useState(false);

const [menuItem, setSelected] = useState("");

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

const handleShow = () => setShow(true);
   
const handleChange = (e) => {
   const { name, value } = e.target;
   setResponsableData({
      ...responsableData,
      [name]: value
   });
}

const loginUser = async () => {
   setLoading(true);
   const session = await login(responsableData);
   if (session.status === 200) {
      setLoading(false);
      history.push('/');
      window.location.reload(false);

   }
   
};

return (
   <Container className="login" fluid >
      <Container className="contenedor">
         <p className="titulo">Elegir Tipo de Cuenta</p>
         {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
         <Form>
            <Row style={{paddingTop: 15}}>
               <Col xs={6}>
                  <Form.Check
                     type="radio"
                     name="usuarios"
                     id="doctor"
                     value="doctor"
                     className="checkboxImagen"
                     // required
                     onChange={handleChange}
                  />
                  <Form.Label for="doctor">
                     <Image src={doctor} className={menuItem === "Doctor" ? "imagenesDesp": "imagenes"} onClick={() => setSelected("Doctor")} data-hover="Doctor"/> 
                     <AiFillCheckCircle className={menuItem === "Doctor" ? "check" : "checkAntes"}/>
                  </Form.Label>
                  <p className="subtitulo">Doctor</p> 
               </Col>
            <Col xs={6}>
               <Form.Check
                  type="radio"
                  name="usuarios"
                  id="paciente"
                  value="paciente"
                  className="checkboxImagen"
                  // required
                  onChange={handleChange}
               />
               <Form.Label for="paciente">
                  <Image src={niños} className={menuItem === "Paciente" ? "imagenesDesp": "imagenes"} onClick={() => setSelected("Paciente")} data-hover="Paciente"/>
                  <AiFillCheckCircle className={menuItem === "Paciente" ? "check" : "checkAntes"}/>
               </Form.Label>
               <p className="subtitulo">Paciente</p>
            </Col>
         </Row>

         <Form.Group className="justify-content-md-center" controlId="userName">
            <p className="formtexto">Usuario</p>
            <Form.Control required type="text" name="username" value={responsableData.username} onChange={handleChange} className="forms" />
         </Form.Group>

         <Form.Group controlId="userPass">
            <p className="formtexto">Contraseña</p>
            <Form.Control required type="password" name="password" value={responsableData.password} onChange={handleChange} className="forms"/>
            <p className="link" onClick={handleShow}>¿Olvidaste la contraseña?</p>

            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Solicitud de contraseña</Modal.Title>
               </Modal.Header>
               <Modal.Body>¿Desea enviar una solicitud de contraseña a su mail?</Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                     Cerrar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                     Enviar
                  </Button>
               </Modal.Footer>
            </Modal>
         </Form.Group>

         <Row>
            <Col style={{display: 'flex', paddingTop: 25}} className="justify-content-md-center">
               <Button className="buttonlogin" onClick={() => loginUser()}>Ingresar</Button>
            </Col>
         </Row>
         
      </Form>
   </Container>
</Container>
)
};

export default Login;