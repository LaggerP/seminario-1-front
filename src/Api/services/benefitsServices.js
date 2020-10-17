import endpoints from '../endpoints';
const axios = require('axios');

export const getAllBenefits = async () => {
   try {
      const benefits = await axios.get(endpoints.getAllBenefits)
      return benefits.data;
   } catch (error) {
       console.log(error)
   }
}
