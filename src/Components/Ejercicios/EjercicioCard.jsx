import React from 'react';
import './EjercicioCard.scss'
import Badge from 'react-bootstrap/Badge'
import { BiJoystick, BiCheckDouble } from "react-icons/bi";


const finalizado = <span>Finalizado <BiCheckDouble size={25}/></span>
const sinHacer = <span>Sin hacer <BiJoystick size={25}/></span>


const EjercicioCard = ({goToExercise, name, description, exercise, module, status, id}) => {
   return (
      <div className="CardContainer" onClick={goToExercise} disabled>
         <div className={status ? 'CardContainer-StatusTrue' : "CardContainer-StatusFalse"} >
            <span>{status ? finalizado: sinHacer}</span>
         </div>
         <div className="CardContainer-Center" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_XDJ9l6LT0aN4yB4qU2vM0YIiHjlU7oNRMw&usqp=CAU)` }}>
         </div>
         <div className="CardContainer-Badges">
            <Badge variant="info">Ejercicio {id}</Badge>{' '}
            <Badge variant="warning" >Módulo {module}</Badge>{' '}

         </div>
         <div className="CardContainer-Bottom" >
            <h5>{name}</h5>
            <p>{description}</p>
         </div>
      </div>
   )
};

export default EjercicioCard;