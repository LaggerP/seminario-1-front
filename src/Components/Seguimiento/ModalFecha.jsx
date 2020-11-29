import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'

import SeguimientoCard from './SeguimientoCard';
import { getExerciseDone } from '../../Api/services/administrarServices';

import { getExercisesByProfile } from '../../Api/services/exerciseServices'
import { getAllExerciseHistory } from '../../Api/services/historyServices'
import * as moment from 'moment';

const ProfileVisitAssignmentModal = (props) => {
   const [consigna, setConsigna] = useState(false);
   const [showExercise, setShowExercise] = useState(true);
   const [selectedOption, setSelectedOption] = useState(null);
   const [exercises, setExercises] = useState([]);

   const [historia, setHistoria] = React.useState({});

   const getExercise = async () => {
      const data = await getExercisesByProfile(props.profileId)

      setDataExercise(data.profileExercises)
   }

   const getHistoryExercise = async () => {
      const data = await getAllExerciseHistory()
      setHistoria(data)
   }

   const [allExercises, setAllExercises] = useState([]);

   const [dataExercise, setDataExercise] = useState([]);

   const [profileData, setProfileData] = useState({
      visit_date: "",
      exercises: [],


   })



   const addVisit = () => {
      setConsigna(!consigna)
      const dateValue = document.querySelector('input[type="date"]').value;
      props.onHide()

   }


   const getGameData = async (e) => {
      await setDataExercise(e);
      setShowExercise(false);
      const exerciseDone = document.querySelector('input[type="exercise"]').value;

   }


   const handleChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
         ...profileData,
         [name]: value
      });

   }


   React.useEffect(function effectFunction() {
      if (profileData.visit_date) {
         getExercise()

         //const data = await getExercisesByProfile(props.profileId)


         //setExercises(data.profileExercises);
         //setAllExercises(data.profileExercises);
      }
   }, [profileData]);






   return (
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Buscar fecha
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group controlId="" style={{ marginTop: 0 }}>

                  <h1>Seleccionar fecha</h1>

               </Form.Group>

               <Row>
                  <Col xs={12} md={12}>
                     <Button variant="success" onClick={() => setConsigna(!consigna)} aria-controls="example-collapse-text" aria-expanded={consigna} size="sm" block >Abrir calendario</Button>{' '}
                     <br />
                     <Collapse in={consigna}>
                        <div id="example-collapse-text">
                           <div className="CardContainer-Badges">
                              <Form>
                                 <Form.Control type="date" name="visit_date" value={profileData.visit_date} onChange={handleChange} required />
                                 <br />
                                 {dataExercise.map(exercise => {
                                    const lastdate = moment(exercise.lastdate).format('YYYY-MM-DD')
                                    if (lastdate == profileData.visit_date && exercise.finished) {
                                       <br />
                                       return <center> <Badge style={{ margin: 5 }} variant="success" > En la fecha: {(profileData.visit_date)} <br />el parciente realizo los Ejercicios: <br /> {exercise.name} <br /> </Badge> </center>
                                    }
                         

                                  /*   else if (lastdate != profileData.visit_date && !exercise.finished) {
                                       return <center> <Badge style={{ margin: 5 }} variant="warning"> No hay ejercicios realizados en la fecha seleccionada</Badge> </center>
                                    } */
                                 }

                                 )
                                 }


                              </Form>
                           </div>

                        </div>
                     </Collapse>
                  </Col>
               </Row>

               <Row style={{ paddingTop: '2.5%' }}>
                  {
                     exercises.map((data, index) => {
                        const { id, name, description, consigna, image, module, finished } = data
                        return (
                           <Col xs={12} md={4} key={data.id} value={data} onClick={() => { getGameData(data) }}>
                              <SeguimientoCard
                                 name={name}
                                 description={description}
                                 consigna={consigna}
                                 module={module}
                                 finished={finished}
                                 image={image}
                                 id={id}
                              />
                           </Col>
                        )
                     })
                  }
               </Row>

            </Form>
         </Modal.Body>
      </Modal>
   );

}



export default ProfileVisitAssignmentModal