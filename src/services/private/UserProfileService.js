import {
    axiosConfigPrivate
} from "../../config/axiosConfigPrivate";


export const getUserById = async () => {
    const url = "/usuarios/usuario";
    const resp = await axiosConfigPrivate.get(url);
    return resp.data;
}

export const edit = async (user) => {
    const url = "/usuarios/usuario";
    console.log(user);
    return await axiosConfigPrivate.put(url, user);
}

export const uploadImage = async (file) => {
    const url = "/usuarios/upload";
    const formData = new FormData();
    formData.append("image", file);
    const resp = await axiosConfigPrivate.post(url, formData);
    return resp.data;
}