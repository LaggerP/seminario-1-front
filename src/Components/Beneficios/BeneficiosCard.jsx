import React from 'react';
import './BeneficiosCard.scss'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useToasts } from 'react-toast-notifications'
import { redeemBenefit } from '../../Api/services/benefitsServices'

const BeneficiosCard = ({ localData, profile }) => {
   const { id, description, image_shop, type_shop, necessary_points } = localData
   const { addToast } = useToasts()
   const canSwap = necessary_points <= profile.benefits_points

   const getBenefit = async () => {
      const data = {
         id: id,
         profile_points: profile.benefits_points,
         id_profile: profile.id, // id del perfil
         id_user: profile.user_id // id del responsable
      }

      const _benefit = await redeemBenefit(data)
      if (_benefit.status === 201) {
         addToast('Beneficio canjeado, mire su email', { appearance: 'success', autoDismiss: true, })
         setTimeout(() => { window.location.reload(false) }, 5000);
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
            {canSwap ? <Button className="mt-4" variant="success" size="md" onClick={getBenefit} block>
               Canjear premio
            </Button> : <Button className="mt-4" variant="danger" size="md" block disabled>
                  Le faltan {necessary_points - profile.benefits_points} puntos para este premio
            </Button>}
         </div>

      </div>
   )
};

export default BeneficiosCard;