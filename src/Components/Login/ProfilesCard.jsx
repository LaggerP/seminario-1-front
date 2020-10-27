import React from 'react';
import './ProfilesCard.scss'

const ProfilesCard = ({gotoProfile, firstname, lastname, id, user_id}) => {
    return (
            <div className="cardContainer" onClick={gotoProfile(id, user_id)}>
                <div>
                    <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="userPhoto" width="auto" height='100px' id="icon" />
                </div>
                <div style={{paddingTop:'4.5%'}}>
                    <h2>{firstname}</h2>
                    <h1>{lastname}</h1>
                </div>
            </div>
    )
 };
 
 export default ProfilesCard;