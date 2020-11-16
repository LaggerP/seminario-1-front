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

export const listTurns = async () => {
   try {
      const _turnos = await axios.get(endpoints.listTurns)
      return _turnos.data; 
  } catch (error) {
      console.log(error)
  }
}

// export const listTurns = async (user_id) => {
//    try {
//       const _turnos = await axios.get(endpoints.listTurns, user_id)
//       return _turnos; 
//   } catch (error) {
//       console.log(error)
//   }
// }

export const assignTurn = async (data) => {
   try {
      const _newTurn = await axios.post(endpoints.assignTurn, data);
      return _newTurn
   } catch (error) {
       console.log(error)
   }
}

export const updateTurn = async (newContent) => {
   try {
      const _updatedTurn = await axios.post(endpoints.updateTurn, newContent);
      return _updatedTurn
  } catch (error) {
      console.log(error)
  }
}

export const deleteTurn = async (turnoID) => {
   try {
      const _deletedTurn = await axios.post(endpoints.deleteTurn, turnoID);
      return _deletedTurn
  } catch (error) {
      console.log(error)
  }
}


export const getAllExercises = async (data) => {
   try {
      const _exercises = await axios.get(endpoints.getAllExercises);
      return _exercises
   } catch (error) {
       console.log(error)
   }
}


export const assignExercises = async (data) => {
   try {
      const _response = await axios.post(endpoints.assignExercises, data);
      return _response
   } catch (error) {
       console.log(error)
   }
}


