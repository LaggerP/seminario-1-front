import React from 'react';

import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';
import { Link} from "react-router-dom";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss'
import doctoresImage from '../../assets/images/doctores.png'
import {IoIosNotificationsOutline, IoIosCalendar} from "react-icons/io"

import leaf1 from '../../assets/images/leaf1.png'
import leaf2 from '../../assets/images/leaf2.png'

const Dashboard = () => {
   return (
      <div>
         <Container style={{marginLeft:0, position:'fixed'}}>
            <Row>
               <Col className="justify-content-md-start" >
                  <div className="bienvenida">
                     <h2>¡Bienvenido, Usuario!</h2>
                  </div>
                  <div className="dashboardContainer">
                     <img src={doctoresImage} alt="" className="imagenDoctor"/>
                  </div>
                  <Row >
                     <Col style={{display: 'flex'}} className="justify-content-md-center">
                        <Link to= "/ejercicios">
                           <Button className="buttonDashboard"><h2>Ejercicios</h2></Button>
                        </Link>
                     </Col>
                  </Row>
                  <Row>
                     <Col xs={6} style={{display: 'flex', paddingTop:'4.5%'}} className="justify-content-md-center">
                        <Link to= "/consejos">
                           <Button className="buttonDashboardInf"><h2>Consejos</h2></Button>
                        </Link>
                     </Col>
                     <Col xs={6} style={{display: 'flex', paddingTop:'4.5%'}} className="justify-content-md-center">
                        <Link to= "/seguimiento">
                           <Button className="buttonDashboardInf"><h2>Historial</h2></Button>
                        </Link>
                     </Col>
                     <Col xs={6}>
                     <img src={leaf2} alt='' className="leaf2"/>
                     </Col>
                     <Col xs={6}>
                     <img src={leaf1} alt='' className="leaf1"/>
                     </Col>
                  </Row>
               </Col>

               <Col>
                  <div className="derecha">
                  <Row>
                     <div className="notificaciones">
                     <IoIosNotificationsOutline style={{fontSize:'30px'}}/>
                        Notificaciones
                     </div>
                  </Row>
                  <Row style={{paddingBottom:'15%'}}>
                     <div className="notif">
                        No tienes ninguna notificación pendiente
                     </div>
                  </Row>
                  <Row>
                     <div className="notificaciones">
                        <IoIosCalendar style={{fontSize:'30px'}}/>
                        Calendario
                     </div>
                  </Row>
                  <Row>
                        <Link to= "/calendario" >
                        <Calendar className="calendario" locale="es-AR"/>
                        </Link>
                  </Row>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Dashboard;