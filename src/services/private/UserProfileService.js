import {
    axiosConfig
} from "../../config/axiosConfig";


export const getUserById = async () => {
    const headers = {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    };
    const url = process.env.REACT_APP_BASE_URL + "/usuarios/usuario";
    const resp = await axiosConfig.get(url, {headers});
    return resp.data;
}

export const edit = async (user) => {
    const headers = {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    };
    const url = process.env.REACT_APP_BASE_URL + "/usuarios/usuario";
    console.log(user);
    return await axiosConfig.put(url, user, {
        headers
    });
}

export const uploadImage = async (file) => {
    const headers = {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    };
    const url = process.env.REACT_APP_BASE_URL + "/usuarios/upload";
    const formData = new FormData();
    formData.append("image", file);
    const resp = await axiosConfig.post(url, formData, {
        headers
    });
    return resp.data;
}