import endpoints from '../endpoints';
import { getUserDBId, getProfileData } from './authService';
const axios = require('axios');
const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";


export const listProfileTurns = async () => {
   try {
      const _turnos = await axios.get(`${urlApi}/api/turnos/listProfileTurns/${getProfileData().id}`)
      return _turnos; 
  } catch (error) {
      console.log(error)
  }
}


export const listMedicTurns = async () => {
   try {
      const _turnos = await axios.get(`${urlApi}/api/turnos/listMedicTurns/${getUserDBId()}`)
      return _turnos; 
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