import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BeneficiosCard from './BeneficiosCard'
import './Beneficios.scss'

class Benefits extends Component {
   constructor(props) {
      super(props);
      this.state = {
         points: 0,
         shops: {}
      }
   }

   componentDidMount() {
      this.setState({ points: 2 })
   }

   render() {
      return (
         <div className="BeneficiosContainer">

            <Container>
               <Row>
                  <div className="BeneficiosContainer-Bienvenida">
                     <div className="BeneficiosContainer-Bienvenida-Imagen">
                     </div>
                     <div className="BeneficiosContainer-Bienvenida-Texto">
                        <h2>Username, estos son tus premios</h2>
                     </div>
                  </div>
               </Row>
               <Row>
                  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>
                  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>
                  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>
                  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>
                  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>  <Col xs={12} md={4} >
                     <BeneficiosCard />
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}


export default Benefits