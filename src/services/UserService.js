import Axios from "axios";

const headers = {
    'Content-Type': 'application/json',
};

export const UserService = {

    async register(user) {
        return await Axios.post(
                process.env.REACT_APP_BASE_URL+"/usuarios",
                user, {
                    headers: headers
                }
            );
    },

};