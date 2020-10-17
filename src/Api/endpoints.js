const urlApi = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8000";

const endpoints = {
   //auth endpoints
    login:`${urlApi}/api/auth/login`,
    register:`${urlApi}/api/auth/login`
    
}

export default endpoints;