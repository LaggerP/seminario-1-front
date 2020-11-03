import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { deleteTurn } from '../../../Api/services/administrarServices'
import { useToasts } from 'react-toast-notifications'


const DeleteTurnoModal = (props) => {
    const { addToast } = useToasts()
    const [isLoading, setLoading] = useState(false);
    const [turnoContent, setTurnoContent] = useState({
        fecha: "",
        hora: "",
        // paciente:"", No sé qué hacer con el Paciente
        comentarios:"",
    })

    const handleClose = () => { props.onHide() };

    const deleteTurno = async () => {
        setLoading(true);
        await deleteTurn(props.data).then((response) => {
            setLoading(false);
            addToast('Se eliminó el turno exitosamente', { appearance: 'success', autoDismiss: true, })
            props.onHide();
            setTimeout(() => { window.location.reload(false) }, 1500);
        }).catch((error) => console.log(error.response));
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Importante</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className='text-center'>
                    ¿Desea eliminar el turno?
                </h5>
                <br />
                <Row>
                    <Col xs={12} md={6}>
                        <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
                    </Col>
                    <Col xs={12} md={6}>
                        <Button variant="danger" onClick={() => deleteTurno()} size="sm" block>{isLoading ? 'Eliminando....' : 'Eliminar'}</Button>{' '}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}


export default DeleteTurnoModal