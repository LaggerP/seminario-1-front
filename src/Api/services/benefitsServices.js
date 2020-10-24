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


export const updateBenefit = async (data) => {
   try{
      return await axios.post(endpoints.redeemBenefit, data)
   } catch (e) {
      return e
   }

}
