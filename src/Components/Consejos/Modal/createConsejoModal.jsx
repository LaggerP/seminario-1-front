import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";
import { create } from '../../../Api/services/consejosServices'
import { useToasts } from 'react-toast-notifications'

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h4">Información importante</Popover.Title>
        <Popover.Content>
            ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! Complete los siguientes campos para crear un nuevo consejo.
        </Popover.Content>
    </Popover>
);

const CreateConsejoModal = (props) => {

    const { addToast } = useToasts()
    const [isLoading, setLoading] = useState(false);
    const [consejoContent, setconsejoContent] = useState({
        title: "",
        content: "",
    })

    const handleClose = () => { props.onHide() };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setconsejoContent({
            ...consejoContent,
            [name]: value,
        });
    }

    const createConsejo = async () => {
        setLoading(true)
        await create(consejoContent).then((response) => {
            setLoading(false);
            addToast('Se creó el consejo exitosamente', { appearance: 'success', autoDismiss: true, })
            props.onHide();
            setTimeout(() => { window.location.reload(false) }, 3000);
        }).catch((error) => console.log(error.response));
    };



    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Creación de consejo&nbsp;
               <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                        <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
                    </OverlayTrigger>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="" style={{ marginTop: 0 }}>
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el título" name="title" value={consejoContent.title} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="" style={{ marginTop: 0 }}>
                        <Form.Label>Consejo</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Ingrese el consejo" name="content" value={consejoContent.content} onChange={handleChange} required />
                    </Form.Group>
                </Form>
                <Row>
                    <Col xs={12} md={6}>
                        <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
                    </Col>
                    <Col xs={12} md={6}>
                        <Button variant="success" onClick={() => createConsejo()} size="sm" block>{isLoading ? 'Creando consejo....' : 'Crear'}</Button>{' '}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}


export default CreateConsejoModal