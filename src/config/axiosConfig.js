import Axios from 'axios';

export const axiosConfig = {
    async get(subpath){
        return await Axios.get(
            process.env.REACT_APP_BASE_URL+"/"+subpath
        );
    },
    async post(subpath, data, headers){
        return await Axios.post(
            process.env.REACT_APP_BASE_URL+"/"+subpath, 
            data, 
            {headers: headers}
        );
    },
    //TODO: delete, put, patch
};