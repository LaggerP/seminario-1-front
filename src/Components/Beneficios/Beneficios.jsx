import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BeneficiosCard from './BeneficiosCard'
import './Beneficios.scss'
import { getAllBenefits } from '../../Api/services/benefitsServices'
import { ToastProvider } from 'react-toast-notifications'


class Benefits extends Component {
   constructor(props) {
      super(props);
      this.state = {
         points: 0,
         shops: []
      }
   }

   async componentDidMount() {
      this.setState({ points: 100 })
      this.setState({ shops: await getAllBenefits() })
   }

   render() {

      const { shops, points } = this.state
      return (
         <div className="BeneficiosContainer">

            <Container>
               <Row>
                  <div className="BeneficiosContainer-Bienvenida">
                     <div className="BeneficiosContainer-Bienvenida-Imagen">
                     </div>
                     <div className="BeneficiosContainer-Bienvenida-Texto">
                        <h2>Username, estos son tus premios</h2>
                        <h3>Actualmente cuentas con {points} puntos</h3>
                     </div>
                  </div>
               </Row>
               <Row>
                  {
                     shops.map(shop => {
                        return (
                           <Col xs={12} md={4} >
                           <ToastProvider>
                              <BeneficiosCard localData={shop} myPoints={points}/>
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