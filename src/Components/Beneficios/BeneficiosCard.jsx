import React from 'react';
import './BeneficiosCard.scss'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useToasts } from 'react-toast-notifications'
import { updateBenefit } from '../../Api/services/benefitsServices'

const BeneficiosCard = ({ localData, myPoints }) => {
   const { id, local, description, image_shop, type_shop, necessary_points } = localData
   const { addToast } = useToasts()

   const canSwap = necessary_points <= myPoints

   const redeemBenefit = async () => {
      const data = {
         id: id,
         profile_points: myPoints,
         id_profile: 2, ///valores hardcodedados
         id_user: 14 ///valores hardcodedados
      }
      
      const _benefit = await updateBenefit(data)
      if (_benefit.status === 201) {
         addToast('Beneficio canejado, mire su email', { appearance: 'success', autoDismiss: true, })
      } else {
         addToast("Ocurrió un error! intente dentro de un rato", { appearance: 'warning', autoDismiss: true, })
      }
   }
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
            {canSwap ? <Button className="mt-4" variant="primary" size="md" onClick={redeemBenefit} block>
               Canjear premio
            </Button> : <Button className="mt-4" variant="primary" size="md" block disabled>
                  Le faltan {necessary_points - myPoints} puntos para este premio
            </Button>}
         </div>
     
      </div>
   )
};

export default BeneficiosCard;