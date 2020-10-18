import React from 'react';
import Card from 'react-bootstrap/Card'
import './AsignarEjercicios.scss'
import {
   Container,
   Row,
} from 'react-bootstrap';

const InputList = () => {
  return (
    <div>
    <Container>
            <Row> 
          <div className="SeguimientoContainer-Bienvenida">
          <div className="SeguimientoContainer-Bienvenida-Texto">
        <h1>Asignacion de ejercicios:</h1>
         </div>
   

         <div className="SeguimientoContainer-Bienvenida-Imagen">
        
         </div> 
         </div>
         </Row>  
   <div className='cardsContainer'> 
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">Ejercicio Numero 1</label>
        </div>
        
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked2"/>
        <label class="custom-control-label" for="defaultUnchecked2">Ejercicio Numero 2</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked3"/>
        <label class="custom-control-label" for="defaultUnchecked3">Ejercicio Numero 3</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked4"/>
        <label class="custom-control-label" for="defaultUnchecked4">Ejercicio Numero 4</label>
        </div>

   </Card>
   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked5"/>
        <label class="custom-control-label" for="defaultUnchecked5">Ejercicio Numero 5</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked6"/>
        <label class="custom-control-label" for="defaultUnchecked6">Ejercicio Numero 6</label>
        </div>
   </Card>
   </div>
   </Container>

      



    
    </div>
  );
}

export default InputList;




/*function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='cardsContainer'> 
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">Ejercicio Numero 1</label>
        </div>
        
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked2"/>
        <label class="custom-control-label" for="defaultUnchecked2">Ejercicio Numero 2</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked3"/>
        <label class="custom-control-label" for="defaultUnchecked3">Ejercicio Numero 3</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked4"/>
        <label class="custom-control-label" for="defaultUnchecked4">Ejercicio Numero 4</label>
        </div>

   </Card>
   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked5"/>
        <label class="custom-control-label" for="defaultUnchecked5">Ejercicio Numero 5</label>
        </div>
   </Card>

   <br/>
   <Card className ='Ejercicios'>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked6"/>
        <label class="custom-control-label" for="defaultUnchecked6">Ejercicio Numero 6</label>
        </div>
   </Card>
   </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);*/