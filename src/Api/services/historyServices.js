import endpoints from '../endpoints';
const axios = require('axios');

export const createHistory = async (historyContent) => {
    try {
        return await axios.post(endpoints.createExerciseHistory, historyContent);

    } catch (error) {
        console.log(error)
    }
}

export const getAllExerciseHistory = async () => {
    try {
        const history = await axios.get(endpoints.getExerciseHistory)
        return history.data;
    } catch (error) {
        console.log(error)
    }
}