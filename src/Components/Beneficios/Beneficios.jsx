import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BeneficiosCard from './BeneficiosCard'
import './Beneficios.scss'
import { getAllBenefits } from '../../Api/services/benefitsServices'
import { ToastProvider } from 'react-toast-notifications'
import { getProfileData } from '../../Api/services/authService';


class Benefits extends Component {
   constructor(props) {
      super(props);
      this.state = {
         shops: [],
         profile: []
      }
   }

   async componentDidMount() {
      this.setState({ profile: await getProfileData() })
      this.setState({ shops: await getAllBenefits() })
   }

   render() {

      const { shops, profile } = this.state
      console.log(profile)
      return (
         <div className="BeneficiosContainer">

            <Container>
               <Row>
                  <div className="BeneficiosContainer-Bienvenida">
                     <div className="BeneficiosContainer-Bienvenida-Imagen">
                     </div>
                     <div className="BeneficiosContainer-Bienvenida-Texto">
                        <h2>{profile.firstname}, estos son los premios que puedes canjear</h2>
                        <br/>
                        <h4>Actualmente cuentas con {profile.benefits_points} puntos</h4>
                     </div>
                  </div>
               </Row>
               <Row>
                  {
                     shops.map(shop => {
                        return (
                           <Col xs={12} md={4} >
                           <ToastProvider>
                              <BeneficiosCard localData={shop} profile={profile}/>
                              </ToastProvider>
                           </Col>
                        )
                     })
                  }
               </Row>
            </Container>
         </div>
      );
   }
}

export default Benefits