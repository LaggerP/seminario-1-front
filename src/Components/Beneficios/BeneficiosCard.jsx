import React from 'react';
import './BeneficiosCard.scss'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const BeneficiosCard = ({ localData, myPoints }) => {
   const { id, local, description, image_shop, type_shop, necessary_points } = localData
   const canSwap = necessary_points <= myPoints
   console.log(canSwap)
   console.log(localData)
   return (
      <div className="CardContainer">
         <div className="CardContainer-Center" style={{ backgroundImage: `url(${image_shop})` }}>
         </div>
         <div className="CardContainer-Badges">
            <Badge variant="info">{type_shop}</Badge>{' '}
            <Badge variant="success">Puntos necesarios {necessary_points}</Badge>{' '}
         </div>
         <div className="CardContainer-Bottom" >
            {description}
          

            { canSwap ? <Button className="mt-4" variant="primary" size="md" block>
               Canjear premio
            </Button> : <Button className="mt-4" variant="primary" size="md" block disabled>
               Le faltan {necessary_points - myPoints} puntos para este premio
            </Button> }
         </div>
      </div>
   )
};

export default BeneficiosCard;