import endpoints from '../endpoints';
const axios = require('axios');
const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";


export const getExercisesByProfile = async (id) => {
   try {
       const response = await axios.get(`${urlApi}/api/exercises/exerciseByProfileId/${id}`);
       return response.data
   } catch (error) {
       console.log(error)
   }
}
