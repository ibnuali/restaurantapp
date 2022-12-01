import axios from 'axios' 
 
const BaseService = axios.create({ 
    timeout: 60000, 
    baseURL: "http://192.168.1.3:3000/api/v1",
}) 
 
BaseService.interceptors.response.use( 
    response =>{
        return {
            data: response.data.data,
            status: response.status,
        } 
    },

    error => { 
        return Promise.reject(error) 
    } 
) 
 
export default BaseService