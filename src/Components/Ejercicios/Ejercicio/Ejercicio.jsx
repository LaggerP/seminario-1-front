import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ejercicio.scss'
import '../Ejercicios.scss'
import laptopImage from '../../../assets/images/ejercicioLaptop.png'
import checkDrawing from '../../../assets/images/checkDrawing.png'
import Countdown, { count } from "react-countdown";
import { GiBackwardTime } from "react-icons/gi";
import { VscDebugStart } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { getAllByDisplayValue } from '@testing-library/react';

const render = ({ hours, minutes, seconds, completed }) => {
console.log(completed)
   
   if (completed) {
      return <AiFillCheckCircle style={{ color: '#28981E', width: '10%', height: '10%', marginLeft: '50px', marginRight: '50px' }} />
   }
   else {
      return <h2 style={{ fontSize: '75px', marginLeft: '50px', marginRight: '50px' }}>{seconds}</h2>
   }
};

const Ejercicio = ({ goToExercise }) => {
   const [exerciseFinished, setExerciseFinished] = useState(false);

   return (
      <div className="EjercicioContainer">
         <Container>
            <Row style={{ paddingTop: '2.5%' }} className="justify-content-md-center">
               <h2>Consigna: <strong>Decir la letra S por 5 segundos</strong></h2>
            </Row>

            <Row className="justify-content-md-center pt-5">
               <GiBackwardTime style={{ color: '#FC6D78', width: '10%', height: '10%' }} />
               <Countdown
                  date={Date.now() + 5000}
                  autoStart={true}
                  zeroPadTime={1}
                  renderer={render}
                  />
               <VscDebugStart style={{ color: '#28981E', width: '10%', height: '10%' }} />
            </Row>
            <Row className="justify-content-md-center pt-5">
               <div className="ImagenCheck">
                  <img src={checkDrawing} alt="" className="imagenCheck" />
               </div>
            </Row>
            <Row className="justify-content-md-center">
               <Col xs={12} md={6} style={{ paddingTop: '4%' }}>
                  <Button className="botonEjercicio ">Salir</Button>
               </Col>
               <Col xs={12} md={6} style={{ paddingTop: '4%' }}>
                 
                  <Button className="botonEjercicio" onClick={goToExercise}>Siguiente</Button>
               </Col>
            </Row>
         </Container>
      </div>

      /* <div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore maxime impedit molestias quos incidunt saepe provident expedita a voluptate accusamus unde praesentium tempore, cumque quo autem at suscipit qui officia veritatis. Pariatur vero velit hic optio porro harum dolor inventore earum, tempora ad nesciunt dolores doloribus tenetur alias deserunt, quas in, eaque esse repellendus distinctio debitis ex necessitatibus. Esse accusantium illo laboriosam dignissimos aperiam recusandae eligendi itaque porro fugiat alias, accusamus incidunt fugit officia numquam quasi ullam iusto aliquid, deleniti libero impedit quis eaque. Aperiam pariatur dolore deleniti reiciendis vitae soluta molestiae reprehenderit, enim magnam. Autem at, eligendi perferendis ducimus deserunt quod! Repudiandae, incidunt enim quis deserunt facilis rem amet officiis neque illum harum? Deserunt, quasi in reiciendis nesciunt vitae ex dolor magni explicabo eaque maiores laborum necessitatibus, provident debitis enim amet quam adipisci ea tenetur quod ad voluptatum maxime porro. Accusamus quod culpa suscipit enim facilis laborum repudiandae aliquid laudantium, doloremque nobis asperiores aspernatur. Nam ea, nihil quam voluptatum hic laboriosam esse quis. Molestiae, deserunt facere repudiandae, iusto ut magnam ab sed at delectus aspernatur quibusdam aliquam optio quis quos.</p>


         <button onClick={goToExercise}>salir</button>
      </div> */
   );
};

export default Ejercicio;