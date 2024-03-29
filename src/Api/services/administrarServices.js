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

export const createProfile = async (data) => {
   try {
      return await axios.post(`${urlApi}/api/profile/create`, data)
   } catch (error) {
      console.log(error)
   }
}

export const create = async (consejoContent) => {
   try {
      return await axios.post(endpoints.createConsejo, consejoContent);

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


export const assignTurn = async (data) => {
   try {
      const _newTurn = await axios.post(endpoints.assignTurn, data);
      return _newTurn
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


export const deleteProfile = async (id) => {
   try {
      const _response = await axios.delete(`${urlApi}/api/administrar/delete/profile/${id}`);
      return _response
   } catch (error) {
      console.log(error)
   }
}

export const deleteResponsable = async (id) => {
   try {
      const _response = await axios.delete(`${urlApi}/api/administrar/delete/responsable/${id}`);
      return _response
   } catch (error) {
      console.log(error)
   }
}

