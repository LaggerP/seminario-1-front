import React from 'react';
import Button from 'react-bootstrap/Button'
import UserCreationModal from './Modal/UserCreationModal'

const Administrar = () => {
   const [modalShow, setModalShow] = React.useState(false);
   return (
      <div>
         Administrar
         <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
               Crear Paciente
            </Button>

            <UserCreationModal
               show={modalShow}
               onHide={() => setModalShow(false)}
            />
         </>
      </div>
   );
};

export default Administrar;