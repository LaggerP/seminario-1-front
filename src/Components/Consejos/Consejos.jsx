import React from 'react';
import './Consejos.scss';
import {
   Container,
   Row,
   Card,
} from 'react-bootstrap';
import consejosImage from '../../assets/images/ConsejosImage.png'


const consejosMock = [
   {
      id: 1,
      title: "Cuidado de la voz",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 2,
      title: "Antes de comenzar",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 3,
      title: "Recordatorios",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 4,
      title: "Malos hábitos a evitar",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 5,
      title: "Recordatorios",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 6,
      title: "Malos hábitos a evitar",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },
   {
      id: 7,
      title: "Antes de comenzar",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 8,
      title: "Recordatorios",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 9,
      title: "Malos hábitos a evitar",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

   {
      id: 10,
      title: "Recordatorios",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus tristique dui placerat, purus dignissim nisi nostra orci mollis leo cursus suspendisse metus ad, dapibus augue faucibus urna cras inceptos egestas cum curabitur parturient. Lacus litora feugiat mus velit pharetra eu facilisis, suscipit eros gravida proin dui imperdiet bibendum nibh, natoque tempus nam molestie justo nascetur. Posuere blandit hac nunc dictum ac diam urna in nullam, malesuada nascetur feugiat himenaeos potenti mi magnis inceptos porttitor metus, erat ligula sociis placerat torquent ultricies donec sollicitudin."
   },

]

const ConsejosCard = ({ id, title, content }) => {

   return (
      <Card>
         <Card.Header as="h5">{title}</Card.Header>
         <Card.Body>
            <Card.Text>
               {content}
            </Card.Text>
         </Card.Body>
      </Card>
   );
};


const Consejos = () => {


   return (
      <div>
         <Container>
            <Row>
               <div className="ConsejosContainer-Bienvenida">
                  <div className="ConsejosContainer-Bienvenida-Texto">
                     <h1>Consejos médicos</h1>
                  </div>
                  <div className="ConsejosContainer-Bienvenida-Imagen">
                     <img src={consejosImage} height='340px' alt="ConsejosImage" />
                  </div>
               </div>
            </Row>

            <div className='cardsContainer'>

               {consejosMock.map((consejo) => (<ConsejosCard {...consejo}></ConsejosCard>))}

            </div>
         </Container>
      </div>
   );
};

export default Consejos;