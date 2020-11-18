import endpoints from '../endpoints';
const axios = require('axios');
const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";

export const register = async (userData) => {
   try {
      return await axios.post(endpoints.register, userData);
   } catch (error) {
      return error.response;
   }
}

export const login = async (userData) => {
   try {
      const _response = await axios.post(endpoints.login, userData)
      if (_response.data.rol == 3) {
         await setPatientStorageData(_response.data.token, userData.username, _response.data.profiles, _response.data.rol, _response.data.id);
         return _response;
      }
      await setMedicStorageData(_response.data.token, userData.username, _response.data.rol, _response.data.id);
      return _response;

   } catch (error) {
      return error;
   }
}

export const profileById = async (id) => {
   try {
      const _response = await axios.get(`${urlApi}/api/profile/${id}`)
      return _response;
   } catch (error) {
      return error;
   }
}

// localstorage internal functionalities
export const isConnected = () => localStorage.getItem('activeSession')
export const getUsername = () => localStorage.getItem('sessionUsername')
export const getUser = () => localStorage.getItem('sessionUser')
export const getRol = () => sessionStorage.getItem('userRol')

//Me devuelve mi id de la tabla users.
export const getUserDBId = () => sessionStorage.getItem('userId')

export const getProfiles = () => JSON.parse(localStorage.getItem('userProfiles'))

//Toda la info necesaria del perfil seleccionado.
export const getProfileData = () => JSON.parse(localStorage.getItem('profileData'));

export const setProfileData = (profileData) => localStorage.setItem('profileData', JSON.stringify(profileData));

export const logOut = (cb) => {
   removeStorageData();
   setTimeout(cb, 100);
}

const removeStorageData = () => {
   sessionStorage.removeItem('token');
   sessionStorage.removeItem('userRol');
   sessionStorage.removeItem('userId');
   localStorage.removeItem('activeSession');
   localStorage.removeItem('sessionName');
   localStorage.removeItem('userProfiles');
   localStorage.removeItem('profileData')

}

const setPatientStorageData = async (token, username, profiles, rol, id) => {
   sessionStorage.setItem('token', token)
   sessionStorage.setItem('userRol', rol)
   sessionStorage.setItem('userId', id)

   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
   localStorage.setItem('userProfiles', JSON.stringify(profiles));
}

const setMedicStorageData = async (token, username, rol, id) => {
   sessionStorage.setItem('token', token)
   sessionStorage.setItem('userRol', rol)
   sessionStorage.setItem('userId', id)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
}