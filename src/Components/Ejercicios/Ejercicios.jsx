import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EjercicioCard from './EjercicioCard'
import './Ejercicios.scss'
import laptopImage from '../../assets/images/ejercicioLaptop.png'
import { getExercises } from '../../Api/services/exerciseServices'

const Ejercicios = () => {
   return (
      <div className="EjerciciosContainer">

         <Container>
            <Row>
               <div className="EjerciciosContainer-Bienvenida">
                  <div className="EjerciciosContainer-Bienvenida-Imagen">
                     <img src={laptopImage} alt=""/>
                  </div>
                  <div className="EjerciciosContainer-Bienvenida-Texto">
                     <h3>UserName, estos son tus ejercicios</h3>
                  </div>

               </div>
            </Row>
            <br/>
            <Row>
               <Col xs={12} md={4}><EjercicioCard /></Col>
               <Col xs={12} md={4}> <EjercicioCard /></Col>
               <Col xs={12} md={4}><EjercicioCard /></Col>
               <Col xs={12} md={4}><EjercicioCard /></Col>


            </Row>
         </Container>


      </div>
   );
};

export default Ejercicios;