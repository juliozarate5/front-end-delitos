import { axiosConfig } from "../../config/axiosConfig";

export const obtenerTodos = () => {
        return axiosConfig.get(
             process.env.REACT_APP_BASE_URL+"/delitos"
        );
}
