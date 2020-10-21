import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { BiInfoCircle } from "react-icons/bi";


const ProfileEditModal = (props) => {

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

    const updateProfile = () => {
        props.onHide();
    }

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
                    <Form.Group controlId="">
                        <Form.Group controlId="">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre del paciente" name="firstname" value={profileData.firstname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el apellido del paciente" name="lastname" value={profileData.lastname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el usuario del paciente" name="profile_name" value={profileData.profile_name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el DNI del paciente" name="dni" value={profileData.dni} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" placeholder="Ingrese la fecha de nacimiento" name="birthday" value={profileData.birthday} onChange={handleChange} />
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
}


export default ProfileEditModal