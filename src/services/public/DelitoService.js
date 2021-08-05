import Axios from "axios";

export const DelitoService = {
    obtenerTodos() {
        return Axios.get(
             process.env.REACT_APP_BASE_URL+"/delitos"
        );
    },
};
