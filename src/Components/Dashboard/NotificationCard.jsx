import React, {useState, useEffect} from 'react';
import { getProfileData } from '../../Api/services/authService';
import { getExercisesByProfile } from '../../Api/services/exerciseServices'
import { Link} from "react-router-dom";
import {getRol} from '../../Api/services/authService'
import './Dashboard.scss'

const profileData = getProfileData();

const NotificationCard = () => {

    const rol = getRol();
    const [exercises, setExercises] = useState([]);
    let exercisesCount = 0

    async function getExercisesData() {
        if (rol==3){
            const data = await getExercisesByProfile(profileData.id)
            setExercises(data.profileExercises);
        }
     }

    useEffect(() => {
        getExercisesData();
     }, []);

    const countExercises = () => {
        exercises.forEach((element) => {
            if(element.finished==null){
                exercisesCount++
            }
        })
    };

    if (exercises.length > 0 && rol== 3) {
        countExercises();
    return (
        <div className="notif">
                Tienes {exercisesCount} ejercicios para realizar, haz click&#160;<Link to= "/ejercicios"><b>aquí</b></Link>&#160;para ir a los ejercicios
        </div>
    )}
    else{
        return (
            <div className="notif">
                No tienes ninguna notificación pendiente
            </div>
        )
    }
 };
 
 export default NotificationCard;