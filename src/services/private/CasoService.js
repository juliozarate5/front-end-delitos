import Axios from "axios";
Axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

export const CasoService = {
    async crear(caso) {
        return await Axios.post(
                process.env.REACT_APP_BASE_URL+"/casos",
                caso
            );
    },
};