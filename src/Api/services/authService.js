import endpoints from '../endpoints';
const axios = require('axios');

export const register = async (userData) => {
   try {
      return await axios.post(endpoints.register, userData);
     
   } catch (error) {
      return error.response
   }
}

export const login = async (userData) => {
   try {
      const _response = await axios.post(endpoints.login, userData)
      await setStorageData("token", userData.username)
      return _response;
  
   } catch (error) {
      return error.response;
   }
}

// localstorage internal functionalities
export const isConnected = () => localStorage.getItem('activeSession')
export const getUser = () => localStorage.getItem('sessionUsername')
export const logOut = (cb) => {
   removeStorageData();
   setTimeout(cb, 100);
}

const removeStorageData = () => {
   sessionStorage.removeItem('token');
   localStorage.removeItem('activeSession');
   localStorage.removeItem('sessionName');
}

const setStorageData = async (token, username) => {
   sessionStorage.setItem('token', token)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
}