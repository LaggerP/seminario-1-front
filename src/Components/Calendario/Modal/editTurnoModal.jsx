import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";
import { updateTurn } from '../../../Api/services/turnosServices'
import { useToasts } from 'react-toast-notifications'

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h4">Información importante</Popover.Title>
        <Popover.Content>
            ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! Complete los siguientes campos para editar el turno.
        </Popover.Content>
    </Popover>
);

const EditTurnoModal = (props) => {
    const { addToast } = useToasts()
    const [isLoading, setLoading] = useState(false);
    const [turnoContent, setTurnoContent] = React.useState({
        fecha: "",
        hora: "",
        // paciente:"", No puedo editar el paciente??
        comentarios:"",
    })

    const handleClose = () => { props.onHide() };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTurnoContent({
            ...turnoContent,
            [name]: value,
        });
    }

    const updateTurno = async () => {
        setLoading(true);
        turnoContent.id = props.data.id
        await updateTurn(turnoContent).then((response) => {
            setLoading(false);
            addToast('Se editó el turno exitosamente', { appearance: 'success', autoDismiss: true, })
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
                        Editar Turno&nbsp;
               <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                            <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Fecha del Turno</Form.Label>
                            <Form.Control type="date" placeholder={props.data.fecha} name="turn_date" value={turnoContent.fecha} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Hora del Turno</Form.Label>
                            <Form.Control type="time" placeholder={props.data.hora} name="turn_time" value={turnoContent.hora} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Comentarios</Form.Label>
                            <Form.Control as="textarea" placeholder={props.data.comentarios} name="comments" value={turnoContent.comentarios} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col xs={12} md={6}>
                            <Button variant="info" size="sm" block onClick={handleClose}>Cerrar</Button>{' '}
                        </Col>
                        <Col xs={12} md={6}>
                            <Button variant="success" onClick={updateTurno} size="sm" block>{isLoading ? 'Guardando cambios...' : 'Guardar cambios'}</Button>{' '}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    } else {
        return null
    }
}
export default EditTurnoModal