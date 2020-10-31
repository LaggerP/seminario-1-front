import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { deleteConsejo } from '../../../Api/services/consejosServices'
import { useToasts } from 'react-toast-notifications'


const DeleteConsejoModal = (props) => {
    const { addToast } = useToasts()
    const [isLoading, setLoading] = useState(false);
    const [consejoContent, setconsejoContent] = useState({
        title: "",
        content: "",
    })

    const handleClose = () => { props.onHide() };

    const deleteCon = async () => {
        setLoading(true);
        await deleteConsejo(props.data).then((response) => {
            setLoading(false);
            addToast('Se eliminó el consejo exitosamente', { appearance: 'success', autoDismiss: true, })
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
                    ¿Desea eliminar el consejo?
                </h5>
                <br />
                <Row>
                    <Col xs={12} md={6}>
                        <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
                    </Col>
                    <Col xs={12} md={6}>
                        <Button variant="danger" onClick={() => deleteCon()} size="sm" block>{isLoading ? 'Eliminando....' : 'Eliminar'}</Button>{' '}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}


export default DeleteConsejoModal