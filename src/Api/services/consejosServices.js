import endpoints from '../endpoints';
const axios = require('axios');

export const getAllConsejos = async () => {
    try {
        const consejos = await axios.get(endpoints.getAllConsejos)
        return consejos.data;
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

export const update = async (newContent) => {
    try {
        const updatedConsejo = await axios.post(endpoints.updateConsejo, newContent);
        return updatedConsejo
    } catch (error) {
        console.log(error)
    }
}

export const deleteConsejo = async (consejoID) => {
    try {
        const deletedConsejo = await axios.post(endpoints.deleteConsejo, consejoID);
        return deletedConsejo
    } catch (error) {
        console.log(error)
    }
}