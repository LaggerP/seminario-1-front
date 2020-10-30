import {getUserDBId} from './services/authService'

const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";

const endpoints = {
   //auth endpoints
    login:`${urlApi}/api/user/login`,
    register:`${urlApi}/api/user/register`,

    //benefits endpoints
    getAllBenefits: `${urlApi}/api/benefits/list`,
    redeemBenefit: `${urlApi}/api/benefits/redeem`,

    //administrar view
    getAllMedicData: `${urlApi}/api/administrar/list`,
    updatePatient: `${urlApi}/api/administrar/update`,
    getAllExercises: `${urlApi}/api/administrar/exercises`,
    assignExercises: `${urlApi}/api/administrar/setExercises`,

    //exercises
    updateExerciseStatus : `${urlApi}/api/exercises/updateStatus/`,
}

export default endpoints;