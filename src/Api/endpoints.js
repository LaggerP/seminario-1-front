const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";

const endpoints = {
   //auth endpoints
    login:`${urlApi}/api/user/login`,
    register:`${urlApi}/api/user/register`,

    
    //benefits endpoints
    getAllBenefits: `${urlApi}/api/benefits/list`
    
}

export default endpoints;