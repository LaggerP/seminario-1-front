import React from 'react';
import './ProfilesCard.scss'
import { useHistory } from 'react-router-dom'
import { setProfileData } from '../../Api/services/authService';

const ProfilesCard = ({ profile }) => {
    let history = useHistory();

    const goToProfile = async () => {
        await setProfileData(profile);
        history.push('/');
        window.location.reload(false);
    };

    return (
        <div className="cardContainer" onClick={goToProfile}>
            <div>
                <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="userPhoto" width="auto" height='100px' id="icon" />
            </div>
            <div style={{ paddingTop: '4.5%' }} >
                <h1>{profile.firstname}</h1>
                <h2>{profile.lastname}</h2>
            </div>
        </div>
    )
};

export default ProfilesCard;