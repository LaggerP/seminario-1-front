import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ejercicio.scss'
import '../Ejercicios.scss'
import laptopImage from '../../../assets/images/ejercicioLaptop.png'
import checkDrawing from '../../../assets/images/checkDrawing.png'
import Timer from 'react-compound-timer';
import { GiBackwardTime } from "react-icons/gi";
import { VscDebugStart } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { getAllByDisplayValue } from '@testing-library/react';
import { getProfileData } from '../../../Api/services/authService';
import { updateStatus } from '../../../Api/services/exerciseServices'

const render = ({ hours, minutes, seconds, completed }) => {
   console.log(completed)

   if (completed) {
      return <AiFillCheckCircle style={{ color: '#28981E', width: '10%', height: '10%', marginLeft: '50px', marginRight: '50px' }} />
   }
   else {
      return <h2 style={{ fontSize: '75px', marginLeft: '50px', marginRight: '50px' }}>{seconds}</h2>
   }
};

const Ejercicio = ({ dataExercise }) => {
   const profileData = getProfileData()
   const { description, timer, name } = dataExercise
   const [exerciseFinished, setExerciseFinished] = useState(false);
   const [exerciseOngoing, setExerciseOngoing] = useState(false);

   const doneExercise = async () => {
      let exerciseToUpdate = {
         exercise_id: dataExercise.id,
         profile_id: profileData.id,
         module: dataExercise.module
      }
      const response = await updateStatus(exerciseToUpdate)
      if (response.status === 201) {
         window.location.reload(false);
      }

   };

   return (
      <div className="EjercicioContainer">
         <Container>
            <Row>
               <div className="EjercicioContainer-Bienvenida">
                  <div className="EjercicioContainer-Bienvenida-Imagen">
                     <img src={laptopImage} alt="" />
                  </div>
                  <div className="EjercicioContainer-Bienvenida-Texto">
                     <h2>{profileData.fistname}, haz el siguiente ejercicio</h2>
                  </div>
               </div>
            </Row>

            <Row style={{ paddingTop: '5%' }} className="justify-content-md-center">
               <h2>Consigna: <strong>{description}</strong></h2>
            </Row>

            <Row className="justify-content-md-center pt-5">
               <Timer
                  initialTime={timer}
                  startImmediately={false}
                  direction="backward"
                  checkpoints={[
                     {
                        time: timer,
                        callback: () => setExerciseFinished(false)
                     },
                     {
                        time: timer,
                        callback: () => setExerciseOngoing(true)
                     },
                     {
                        time: 1,
                        callback: () => setExerciseOngoing(false)
                     },
                     {
                        time: 0,
                        callback: () => setExerciseFinished(true)
                     }
                  ]}
                  onReset={() => setExerciseFinished(false)}
               >
                  {({ start, resume, pause, stop, reset, timerState }) => (
                     <React.Fragment>
                        <div>
                           <GiBackwardTime onClick={reset} style={{ color: '#FC6D78', cursor: 'pointer', fontSize: '114px' }} />
                        </div>
                        <div style={{ fontSize: '75px', marginLeft: '25px', marginRight: '75px', visibility: (exerciseFinished ? 'hidden' : 'visible') }}>
                           <Timer.Seconds formatValue={(value) => `${(value < 0 ? `0` : value)}`} />
                        </div>
                        <div style={{ fontSize: '75px', marginLeft: '-135px', visibility: (exerciseFinished ? 'visible' : 'hidden') }}>
                           <AiFillCheckCircle style={{ color: '#28981E' }} />
                        </div>
                        <div>
                           <VscDebugStart onClick={start} style={{ color: '#28981E', cursor: 'pointer', fontSize: '114px' }} />
                        </div>
                     </React.Fragment>
                  )}
               </Timer>
            </Row>

            <Row className="justify-content-md-center pt-5">
               <div className="ImagenCheck">
                  <img src={checkDrawing} alt="" className="imagenCheck" />

               </div>
            </Row>
            <Row className="justify-content-md-center">
               <Col xs={12} md={6} style={{ paddingTop: '4%' }}>
                  <Link to="/ejercicios">
                     <Button className="botonEjercicio" disabled={exerciseOngoing}>Salir</Button>
                  </Link>
               </Col>
               <Col xs={12} md={6} style={{ paddingTop: '4%' }}>
                  <Button className="botonEjercicio" onClick={doneExercise} disabled={!exerciseFinished}>Siguiente</Button>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Ejercicio;