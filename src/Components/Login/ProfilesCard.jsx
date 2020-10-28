import React from 'react';
import './ProfilesCard.scss'

const ProfilesCard = ({gotoProfile, firstname, lastname, id, user_id}) => {
    return (
            <div className="cardContainer">
                <div>
                    <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="userPhoto" width="auto" height='100px' id="icon" />
                </div>
                <div style={{paddingTop:'4.5%'}}>
                    <h1>{firstname}</h1>
                    <h2>{lastname}</h2>
                </div>
            </div>
    )
 };
 
 export default ProfilesCard;