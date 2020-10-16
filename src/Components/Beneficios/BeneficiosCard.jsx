import React from 'react';
import './BeneficiosCard.scss'
import Badge from 'react-bootstrap/Badge'
import { BiJoystick, BiCheckDouble } from "react-icons/bi";
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_XDJ9l6LT0aN4yB4qU2vM0YIiHjlU7oNRMw&usqp=CAU"

const BeneficiosCard = ({}) => {
   return (
      <div className="CardContainer">
         <div className="CardContainer-Center" style={{ backgroundImage: `url(${image})` }}>
         </div>
         <div className="CardContainer-Badges">
            <Badge variant="info">Jugueteria</Badge>{' '}
            <Badge variant="success" >Jugueteria</Badge>{' '}
         </div>
         <div className="CardContainer-Bottom" >
         Info tienda
         </div>
      </div>
   )
};

export default BeneficiosCard;