import Axios from "axios";
Axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

export const DelitoService = {
    
};