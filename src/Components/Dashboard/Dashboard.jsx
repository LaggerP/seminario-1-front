import React from 'react';

import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';
import { Link} from "react-router-dom";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss'
import doctoresImage from '../../assets/images/doctores.png'
import {IoIosNotificationsOutline} from "react-icons/io"

const Dashboard = () => {
   return (
      <div>
         <Container style={{marginLeft:0}}>
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
                  </Row>
               </Col>

               <Col>
                  <div className="derecha">
                     <div className="notificaciones">
                     <IoIosNotificationsOutline style={{fontSize:'30px'}}/>
                        Notificaciones
                     </div>
                     <div>
                        <Calendar className="calendario" locale="es-AR"/>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Dashboard;