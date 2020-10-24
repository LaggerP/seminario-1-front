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
      await setStorageData("token", userData.username, _response.data.profiles)
      return _response;
   } catch (error) {
      return error;
   }
}

// localstorage internal functionalities
export const isConnected = () => localStorage.getItem('activeSession')
export const getUser = () => localStorage.getItem('sessionUsername')
export const getProfiles = () => JSON.parse(localStorage.getItem('userProfiles'))
export const logOut = (cb) => {
   removeStorageData();
   setTimeout(cb, 100);
}

const removeStorageData = () => {
   sessionStorage.removeItem('token');
   localStorage.removeItem('activeSession');
   localStorage.removeItem('sessionName');
   localStorage.removeItem('sessionName');

}

const setStorageData = async (token, username, profiles) => {
   sessionStorage.setItem('token', token)
   localStorage.setItem('activeSession', true);
   localStorage.setItem('sessionUsername', username);
   localStorage.setItem('userProfiles', JSON.stringify(profiles))
}