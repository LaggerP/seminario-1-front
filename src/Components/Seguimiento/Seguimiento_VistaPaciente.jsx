import React, { useState, useEffect } from 'react';
import "./Seguimiento.scss"
import {
   Container,
   Row,
   Table
} from 'react-bootstrap';
import { getProfileData } from '../../Api/services/authService';
import * as moment from 'moment';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProfileVisitAssignmentModal from './ModalFecha';
import { BsCalendar } from "react-icons/bs";
import { getRol } from '../../Api/services/authService'





const Seguimiento_VistaPaciente = ({ id, firstname, lastname, dni, birthday, profiles, profileData }) => {
   const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);
   const rol = getRol();
   const [responsableData, setResponsableData] = useState({
      profiles: [],
   })


   const [profileId, setProfileId] = React.useState(false);


   console.log('Aca',profileData)
   return (
      <div>
         <Table className='table-style'>
            <thead>
               <tr>
                  <th>DNI</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Nacimiento</th>



               </tr>
            </thead>


                     <tbody>
                        <tr>
                           <td>{profileData.dni}</td>
                           <td>{profileData.firstname}</td>
                           <td>{profileData.lastname}</td>
                           <td>{moment(profileData.birthday).format('DD/MM/YYYY')}</td>




                           <td>
                              <Row className='flex-row-reverse'>
                                 <OverlayTrigger overlay={<Tooltip>Filtrar fecha</Tooltip>}>

                                    <div className='icon-size' onClick={() => {
                                       setProfileId(id)
                                       setModalVisitAssignment(true)


                                    }
                                    }>
                                       <BsCalendar className='icon-styles' /></div>
                                 </OverlayTrigger>
                              </Row>
                           </td>

                        </tr>
                     </tbody>


                













         </Table>
         <ProfileVisitAssignmentModal
            show={modalVisitAssignment}
            onHide={() => setModalVisitAssignment(false)}
            profileId={profileData.id}
         />


      </div>
   );

};

export default Seguimiento_VistaPaciente;