import endpoints from '../endpoints';
const axios = require('axios');

export const register = async (userData) => {
   try {
      return await axios.post(endpoints.register, userData)

   } catch (error) {
       return error.response
   }
}

export const login = async (userData) => {
   try {
   } catch (error) {
       if (error.response) {
           return error.response;
       }
   }
}

// localstorage internal functionalities
export const isConnected = () => localStorage.getItem('session')
export const getUser = () => localStorage.getItem('sessionName')
export const logOut = (cb) => {
   removeStorageData();
   setTimeout(cb, 100);
}

const removeStorageData = () => {
   sessionStorage.removeItem('token');
   localStorage.removeItem('activeSession');
   localStorage.removeItem('sessionName');
}

const setStorageData = (token, username) => {
   sessionStorage.setItem('token', token)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionName', username);
}