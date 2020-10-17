import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeAuth from '../../Api/Auth/fakeAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import doctor from '../../Components/Login/doctor.png'
import niños from '../../Components/Login/niños.png'
import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';

function Login (props) {

   const [state, setState] = useState({
      user:"",
      pass:"",
      type:"",
      error:""
   })

   const [validated, setValidated] = useState(false);

   const [menuItem, setSelected] = useState("");

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);

   const handleShow = () => setShow(true);
 

   let history = useHistory();



   const fakeLogin = () => {
      fakeAuth.authenticate(history.push("/"))
      window.location.reload(false);
   }

   const handleChange = (e) => {
      const {name, value} = e.target;
      setState({
         [name] : value
      });
   }

   const handleSubmit = (e) => {
      let err = "";
      let contra = state.pass;

      const form= e.currentTarget;

      console.log(form.checkValidity())

      if (form.checkValidity() === false) {
         e.preventDefault();
         e.stopPropagation();
         console.log(state.user, state.pass);
      }
      else{
         fakeLogin();
      }

      setValidated(true);
     

      // if (state.user=== "admin" && state.pass==="admin"){
      //    console.log("ayuda");
      //    fakeLogin();
      //    }

      // else{
      //       err = <p>El usuario o contraseña son incorrectos</p>
      //       contra = ""
      //    }

      
      
      setState({
         pass: contra,
         errormessage: err
      });
   }

   return (

      <Container className="login" fluid>
            <Container className="contenedor">
               <p className="titulo">Elegir Tipo de Cuenta</p>
               <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Row>
                  <Col xs="6">
                     <Form.Check
                        type="radio"
                        name="usuarios"
                        id="doctor"
                        value="doctor"
                        className="checkboxImagen"
                        required
                        onChange={handleChange}
                     />
                     <Form.Label for="doctor">
                        <Image src={doctor} className={menuItem === "Doctor" ? "imagenesDesp": "imagenes"} onClick={() => setSelected("Doctor")} data-hover="Doctor"/> 
                     </Form.Label>
                     <p className="subtitulo">Doctor</p>
                     
                  </Col>
                  <Col xs="6">
                     <Form.Check
                        type="radio"
                        name="usuarios"
                        id="paciente"
                        value="paciente"
                        className="checkboxImagen"
                        required
                        onChange={handleChange}
                     />
                     <Form.Label for="paciente">
                      <Image src={niños} className={menuItem === "Paciente" ? "imagenesDesp": "imagenes"} onClick={() => setSelected("Paciente")} data-hover="Paciente"/> 
                     </Form.Label>
                     <p className="subtitulo">Paciente</p>
                  </Col>
               </Row>

                  <Form.Group controlId="userName">
                     <p className="formtexto">Usuario</p>
                     <Form.Control required type="text" name="user" value={state.user} onChange={handleChange} className="forms" />
                  </Form.Group>

                  <Form.Group controlId="userPass">
                     <p className="formtexto">Contraseña</p>
                     <Form.Control required type="password" name="pass" value={state.pass} onChange={handleChange} className="forms"/>
                     <p className="link" onClick={handleShow}>Olvidaste la contraseña?</p>

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
               <Col xs="6">
               <Form.Group>
                     <Form.Check type="checkbox" label="Recordarme" className="recordar"/>
                  </Form.Group>
               </Col>
               <Col xs="6">
                  <Button type="submit" className="buttonlogin">Ingresar</Button>
               </Col>
               </Row>
               </Form>
            </Container>
      </Container>

   
   return (
      <div>
         <button type="button" onClick={fakeLogin}>Go dashboard!</button>
      </div>

   );
};

export default Login;