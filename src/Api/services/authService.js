import endpoints from '../endpoints';
const axios = require('axios');

export const register = async (userData) => {
   console.log(userData)
   try {
      return await axios.post(endpoints.register, userData);
     
   } catch (error) {
      return error.response
   }
}

export const login = async (userData) => {
   try {
      const _response = await axios.post(endpoints.login, userData)
      
      if (_response.data.rol == 3) {
         await setPatientStorageData(_response.data.token, userData.username, _response.data.profiles, _response.data.rol)
         return _response;
      }
      await setMedicStorageData(_response.data.token, userData.username, _response.data.rol)
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
export const getProfiles = () => JSON.parse(localStorage.getItem('userProfiles'))
export const logOut = (cb) => {
   removeStorageData();
   setTimeout(cb, 100);
}

const removeStorageData = () => {
   sessionStorage.removeItem('token');
   sessionStorage.removeItem('userRol');
   localStorage.removeItem('activeSession');
   localStorage.removeItem('sessionName');
   localStorage.removeItem('sessionName');

}

const setPatientStorageData = async (token, username, profiles, rol) => {
   sessionStorage.setItem('token', token)
   sessionStorage.setItem('userRol', rol)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
   localStorage.setItem('userProfiles', JSON.stringify(profiles));
}

const setMedicStorageData = async (token, username, rol) => {
   sessionStorage.setItem('token', token)
   sessionStorage.setItem('userRol', rol)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
}