import {axiosConfig} from '../../config/axiosConfig';

export const MapService = {
    getAllCasos() {
        const URL = 'casos';
        return axiosConfig.get(URL);
    },

};