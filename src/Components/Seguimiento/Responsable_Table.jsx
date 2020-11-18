import React, { useEffect } from 'react';
import './Seguimiento.scss';
import {
   Row,
   Table,
} from 'react-bootstrap';
import { BsCalendar } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProfileVisitAssignmentModal from './ModalFecha';
import { getProfileData } from '../../Api/services/authService';
import * as moment from 'moment';
 

const ResponsableTable = ({   firstname, lastname, profiles  }) => {
    const profileData = getProfileData()
    const [modalVisitAssignment, setModalVisitAssignment] = React.useState(false);

    const [profileId, setProfileId] = React.useState(false);
 
    return (
       <div>
          <h2 className='table-title table-title-text'>{firstname} {lastname}</h2>
 
          
          <Table className='table-style'>
             <thead>
                <tr>
                   <th>DNI</th>
                   <th>Nombre</th>
                   <th>Apellido</th>
                   <th>Fecha de Nacimiento</th>
                 
                   
                  
                </tr>
             </thead>
             {console.log("Este es el pacienteInfo",profiles)}
             {
                profiles.map((pacienteInfo, index) => {
                   const { id, birthday, dni, firstname, lastname, profile_name, status, user_id } = pacienteInfo
                      return (
                         <tbody>
                            <tr>
                               <td>{dni}</td>
                               <td>{firstname}</td>
                               <td>{lastname}</td>
                               <td>{moment(birthday).format('DD/MM/YYYY')}</td>
                           
                              
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
                         
                         
                      )
                   }
 
                   )
                }
            
          </Table>
          <ProfileVisitAssignmentModal
             show={modalVisitAssignment}
             onHide={() => setModalVisitAssignment(false)}
             profileId={profileId}
          />
          
 
       </div>
    );
             
 };

 export default ResponsableTable;