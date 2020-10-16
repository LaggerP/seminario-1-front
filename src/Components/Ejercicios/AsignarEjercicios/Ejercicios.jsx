/*
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Select from 'react-select';

import EjercicioCard from './EjercicioCard'
import './Ejercicios.scss'
import laptopImage from '../../assets/images/ejercicioLaptop.png'
import Ejercicio from './Ejercicio/Ejercicio'
import { Link, Redirect } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";

import { fakeGames } from './fakeGames'

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
];



const popover = (
   <Popover id="popover-basic">
      <Popover.Title as="h4">Información importante</Popover.Title>
      <Popover.Content>
         ¡Hola, Pablo <span role="img" aria-label="SmileFace">😄</span>! si necesita <strong>ayuda</strong> con un ejercicio, puedes ir a la sección de <Link to="/consejos">consejos</Link> o consultarle a su médico/a.
     </Popover.Content>
   </Popover>
);


const Ejercicios = () => {
   const [showExercise, setShowExercise] = useState(true);
   const [selectedOption, setSelectedOption] = useState(null);
   const [exercises, setExercises] = useState([]);
   const [dataExercise, setDataExercise] = useState();

   async function getExercisesData() {
      try {
         const data = await fakeGames
         setExercises(data)
      } catch {

      }
   }

   useEffect(() => {
      getExercisesData();
   }, [exercises]);


   const goToExercise = () => {
      showExercise ? setShowExercise(false) : window.location.reload(false);
   }

   const getGameData = async (e) => {
      console.log(e.id)
      await setDataExercise(e)
      if (dataExercise === undefined){
         console.log("hola")
         await setDataExercise(e)
      }

      

   }

   if (exercises.length > 0) {

      if (showExercise) {
         return (
            <div className="EjerciciosContainer">
               <Container>
                  <Row>
                     <div className="EjerciciosContainer-Bienvenida">
                        <div className="EjerciciosContainer-Bienvenida-Imagen">
                           <img src={laptopImage} alt="" />
                        </div>
                        <div className="EjerciciosContainer-Bienvenida-Texto">
                           <h2>Pablo Lagger, estos son tus ejercicios</h2>
                        </div>
                     </div>
                  </Row>

                  <Row >
                     <Col xs={4} style={{ paddingTop: '4%' }}>
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={exercises}
                           placeholder="Buscar por módulo"
                        />

                     </Col>
                     <Col style={{ paddingTop: '4.5%', paddingLeft: 0 }}>
                        <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                           <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
                        </OverlayTrigger>
                     </Col>

                  </Row>
                  <Row style={{ paddingTop: '2.5%' }}>

                     {
                        exercises.map((data, index) => {
                           const { id, name, description, exercise, module, status } = data
                           return (
                              <Col xs={12} md={4} key={data.id} value={data} onClick={() => {getGameData(data)}}>
                                    <EjercicioCard
                                       name={name}
                                       description={description}
                                       exercise={exercise}
                                       module={module}
                                       status={status}
                                       id={id}
                                    />

                              </Col>

                           )
                        })
                     }
                  </Row>
               </Container>
            </div>
         )
      } else {
         return (
            <div className="EjerciciosContainer">
               <Container>
                  <Row>
                     <Ejercicio goToExercise={goToExercise}></Ejercicio>
                  </Row>
               </Container>

            </div>

         );
      }
   } else {
      return (
         <h1>cargando</h1>
      )
   }


};

export default Ejercicios;

*/