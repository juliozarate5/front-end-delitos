import { axiosConfigPrivate } from "../../config/axiosConfigPrivate";


export const crear = async (caso = {}) => {
    return await axiosConfigPrivate.post(
        process.env.REACT_APP_BASE_URL+"/casos", caso
    );
}