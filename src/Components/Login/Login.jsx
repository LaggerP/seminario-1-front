import React, { useState } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login, getProfiles } from '../../Api/services/authService'
import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";
import Spinner from 'react-bootstrap/Spinner'
import { useToasts } from 'react-toast-notifications'
import ProfilesCard from './ProfilesCard'


import doctor from '../../assets/images/doctor.png'
import niños from '../../assets/images/niños.png'


const Login = (props) => {  
   
   const initialState = {
      username: "",
      password: "",
   };
   let history = useHistory();
   const [isLoading, setLoading] = useState(false);
   const [userData, setUserData] = useState({
      username: "",
      password: ""
   })

 

   const [menuItem, setSelected] = useState("");
   const [show, setShow] = useState(false);
   const [showProfile, setShowProfile] = useState(false);
   const [profile, setProfile] = useState();
   const { addToast } = useToasts()

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({
         ...userData,
         [name]: value
      });
   }

   const loginUser = async () => {
      setLoading(true);
      // setting user rol. 2-doctor & 3-normal user
      userData.rol === "doctor" ? userData.rol = 2 : userData.rol = 3

      if (userData.rol > 0) {
         const session = await login(userData);
         if (session.status === 200) {
            if (userData.rol === 3) {
               await setProfile(getProfiles());
               setShowProfile(true);
            } else if (userData.rol === 2) {
               setLoading(false);
               history.push('/');
               window.location.reload(false);
            }
         } else {
            setLoading(false);
            setUserData(initialState)
            addToast("Pueda que sus credenciales no sean las correctas", { appearance: 'warning', autoDismiss: true, })
         }
      }
   };

   if (showProfile) {
      return (
         <div className="login">
            <Container>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <h2>Seleccionar el perfil para continuar</h2>
               </div>
               <Row className="justify-content-md-center">
                  {
                     profile.map((profileInfo, index) => {
                        return (
                           <Col xs={12} md={4}>
                              <ProfilesCard profile={profileInfo} />
                           </Col>
                        )
                     })
                  }
               </Row>
            </Container>
         </div>
      )
   }
   else {
      const { username, password } = userData
      return (
         <Container className="login" fluid>
            <div className="contenedor">
               <p className="titulo">Elegir Tipo de Cuenta</p>
               <Form >
                  <Row style={{ paddingTop: 10, display: 'flex', flexWrap: 'wrap' }}>
                     <Col xs={12} md={6} className="imageDiv">
                        <Form.Check
                           type="radio"
                           name="rol"
                           id="doctor"
                           value="doctor"
                           className="checkboxImagen"
                           // required
                           onChange={handleChange}
                        />
                        <Form.Label for="doctor">
                           <Image src={doctor} className={menuItem === "Doctor" ? "imagenesDesp" : "imagenes"} onClick={() => setSelected("Doctor")} data-hover="Doctor" />
                           <AiFillCheckCircle className={menuItem === "Doctor" ? "check" : "checkAntes"} />
                        </Form.Label>
                        <p className="subtitulo">Doctor</p>
                     </Col>
                     <Col xs={12} md={6} className="imageDiv">
                        <Form.Check
                           type="radio"
                           name="rol"
                           id="paciente"
                           value="paciente"
                           className="checkboxImagen"
                           // required
                           onChange={handleChange}
                        />
                        <Form.Label for="paciente">
                           <Image src={niños} className={menuItem === "Paciente" ? "imagenesDesp" : "imagenes"} onClick={() => setSelected("Paciente")} data-hover="Paciente" />
                           <AiFillCheckCircle className={menuItem === "Paciente" ? "check" : "checkAntes"} />
                        </Form.Label>
                        <p className="subtitulo">Paciente</p>
                     </Col>
                  </Row>
                  <Form.Group className="justify-content-md-center" controlId="userName" style={{ marginTop: 10 }}>
                     <p className="formtexto">Usuario</p>
                     <Form.Control
                        required
                        placeholder="Su nombre de usuario"
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        className="forms"
                     />
                  </Form.Group>
                  <Form.Group controlId="userPass" style={{ marginTop: 10 }}>
                     <p className="formtexto">Contraseña</p>
                     <Form.Control
                        required
                        placeholder="Su contraseña"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="forms"
                     />
                     <p className="link" onClick={handleShow}>¿Olvidaste la contraseña?</p>
                    
                  </Form.Group>

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
                  <Row>
                     <Col xs={12} style={{ display: 'flex', paddingTop: 8, marginBottom:10 }} className="justify-content-md-center">
                        {
                           isLoading ? <Spinner animation="border" variant="info" />
                              :
                              username && password != undefined ?
                                 <Button className="buttonLogin" onClick={() => loginUser()}>Ingresar</Button>
                                 :
                                 <Button className="buttonDisabledLogin" variant="secondary" disabled>Ingresar</Button>
                        }
                     </Col>
                  </Row>
               </Form>
            </div>
         </Container>
      )
   }
};

export default Login;