import endpoints from '../endpoints';
import { getUserDBId } from './authService';
const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";

const axios = require('axios');

export const getAllMedicData = async () => {
   try {
      const allMedicData = await axios.get(`${urlApi}/api/administrar/list/${getUserDBId()}`);
      return allMedicData.data;
   } catch (error) {
       console.log(error)
   }
}

export const updatePatient = async (data) => {
   try {
      const _updatedPatient = await axios.post(endpoints.updatePatient, data);
      return _updatedPatient
   } catch (error) {
       console.log(error)
   }
}


