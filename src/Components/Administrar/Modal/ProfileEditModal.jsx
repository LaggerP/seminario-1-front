import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";
import { updatePatient } from '../../../Api/services/administrarServices';
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

const ProfileEditModal = (props) => {
    const { addToast } = useToasts()

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h4">Información importante</Popover.Title>
            <Popover.Content>
                ¡Hola, doctorName <span role="img" aria-label="SmileFace">😄</span>! puede editar la información del <strong>paciente</strong> en los siguientes campos.<br /> No olvide guardar los cambios.
            </Popover.Content>
        </Popover>
    );
    const [profileData, setProfileData] = useState({
        profile_name: "",
        firstname: "",
        lastname: "",
        dni: "",
        birthday: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    }

    const updateProfile = async () => {
        profileData.id = props.data.id
        const _updatedPatient = await updatePatient(profileData)
        if (_updatedPatient.status === 201) {
            addToast('Se asignaron los ejercicios de forma correcta', { appearance: 'success', autoDismiss: true, })
            window.location.reload(false);
        } else {
            addToast('Hubo un error. Intente nuevamente', { appearance: 'success', autoDismiss: true, })
        }
        props.onHide()

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
                        Editar paciente &nbsp;
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover} >
                            <BiInfoCircle size={20} style={{ cursor: 'pointer' }} />
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Group controlId="" style={{ marginTop: 0 }}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder={props.data.firstname} name="firstname" value={profileData.firstname} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="" style={{ marginTop: 0 }}>
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder={props.data.lastname} name="lastname" value={profileData.lastname} onChange={handleChange} />
                            </Form.Group>
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="text" placeholder={props.data.profile_name} name="profile_name" value={profileData.profile_name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>DNI</Form.Label>
                            <Form.Control type="text" placeholder={props.data.dni} name="dni" value={profileData.dni} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="" style={{ marginTop: 0 }}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" placeholder={props.data.birthday} name="birthday" value={profileData.birthday} onChange={handleChange} />
                        </Form.Group>
                    </Form>

                    <Row>
                        <Col xs={12} md={6}>
                            <Button variant="info" size="sm" block onClick={updateProfile}>Cerrar</Button>{' '}

                        </Col>
                        <Col xs={12} md={6}>
                            <Button variant="success" onClick={updateProfile} size="sm" block>Actualizar paciente</Button>{' '}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    } else {
        return (
            <h1></h1>
        )
    }

}


export default ProfileEditModal