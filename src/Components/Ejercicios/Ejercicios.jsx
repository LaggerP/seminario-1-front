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

import { getProfileData } from '../../Api/services/authService';
import { getExercisesByProfile } from '../../Api/services/exerciseServices'

const options = [
   { value: 'Todos', label: 'Todos los módulos' },
   { value: 'Contador', label: 'Módulo Contador' },
   { value: 'Lectura', label: 'Módulo Lectura' },
];

const profileData = getProfileData();


const popover = (
   <Popover id="popover-basic">
      <Popover.Title as="h4">Información importante</Popover.Title>
      <Popover.Content>
         ¡Hola, {profileData.firstname} <span role="img" aria-label="SmileFace">😄</span>! si necesita <strong>ayuda</strong> con un ejercicio, puedes ir a la sección de <Link to="/consejos">consejos</Link> o consultarle a su médico/a.
     </Popover.Content>
   </Popover>
);



const Ejercicios = () => {
   const [showExercise, setShowExercise] = useState(true);
   const [selectedOption, setSelectedOption] = useState(null);
   const [exercises, setExercises] = useState([]);
   const [allExercises, setAllExercises] = useState([]);
   const [dataExercise, setDataExercise] = useState();

   async function getExercisesData() {
      const data = await getExercisesByProfile(profileData.id)
      setExercises(data.profileExercises);
      setAllExercises(data.profileExercises);
   }

   useEffect(() => {
      getExercisesData();
   }, []);


   const goToExercise = () => {
      showExercise ? setShowExercise(false) : window.location.reload(false);
   }

   const getGameData = async (e) => {
      await setDataExercise(e);
      setShowExercise(false);
   }

   const changeModule = async (e) => {
      setSelectedOption(e.value)
      const _exercises = await allExercises.filter(exercise => (exercise.module === e.value));
      _exercises.length === 0 ? setExercises(allExercises) : setExercises(_exercises);
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
                           <h2>{profileData.firstname}, estos son tus ejercicios</h2>
                        </div>
                     </div>
                  </Row>
                  <Row >
                     <Col xs={4} style={{ paddingTop: '4%' }}>
                        <Select
                           defaultValue={selectedOption}
                           onChange={changeModule}
                           options={options}
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
                           const { id, name, description, exercise, module, finished } = data
                           return (
                              <Col xs={12} md={4} key={data.id} value={data} onClick={() => { getGameData(data) }}>
                                 <EjercicioCard
                                    name={name}
                                    description={description}
                                    exercise={exercise}
                                    module={module}
                                    finished={finished}
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
                     <Ejercicio dataExercise={dataExercise} goToExercise={goToExercise}></Ejercicio>
                  </Row>
               </Container>
            </div>
         );
      }
   } else {
      return (
         <div className="NonExercises">
                 <h1>No posee ningún ejercicio asignado</h1>
            </div>
      )
   }
};

export default Ejercicios;