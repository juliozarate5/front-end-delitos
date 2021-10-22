import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json',
};

export const register = async (user) => {
    const url = process.env.REACT_APP_BASE_URL + "/usuarios/signup";
    console.log(user);
    return await axiosConfig.post(url, user, {
        headers
    });
}