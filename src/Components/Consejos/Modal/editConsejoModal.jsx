import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";
import { update } from '../../../Api/services/consejosServices'
import { useToasts } from 'react-toast-notifications'

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h4">Información importante</Popover.Title>
        <Popover.Content>
            ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! Complete los siguientes campos para editar el consejo.
        </Popover.Content>
    </Popover>
);

const EditConsejoModal = (props) => {
    const { addToast } = useToasts()
    const [isLoading, setLoading] = useState(false);
    const [consejoContent, setconsejoContent] = React.useState({
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

    const updateConsejo = async () => {
        setLoading(true);
        consejoContent.id = props.data.id
        await update(consejoContent).then((response) => {
            setLoading(false);
            addToast('Se editó el consejo exitosamente', { appearance: 'success', autoDismiss: true, })
            props.onHide();
            setTimeout(() => { window.location.reload(false) }, 1500);
        }).catch((error) => console.log(error.response));
    }


    if (props.data !== undefined) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar consejo&nbsp;
               <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                            <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder={props.data.title} name="title" value={consejoContent.title} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Consejo</Form.Label>
                            <Form.Control as="textarea" maxlength='1000' rows={4} placeholder={props.data.content} name="content" value={consejoContent.content} onChange={handleChange} required />
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col xs={12} md={6}>
                            <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
                        </Col>
                        <Col xs={12} md={6}>
                            <Button variant="success" onClick={updateConsejo} size="sm" block>{isLoading ? 'Guardando cambios...' : 'Guardar cambios'}</Button>{' '}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    } else {
        return null
    }
}
export default EditConsejoModal