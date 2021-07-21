import Axios from "axios";

const credenciales = btoa(process.env.REACT_APP_NAME + ':' + process.env.REACT_APP_AUTH_PASSWORD);
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + credenciales,
};

export const AuthService = {

    async login(user) {
        let params = new URLSearchParams();
        params.set('grant_type', 'password');
        params.set('username', user.username);
        params.set('password', user.password);
        Axios.post(
                process.env.REACT_APP_AUTH_URL,
                params, {
                    headers: headers
                }
            ).then(r => console.log(r))
            .catch(e => console.log(e));
    },

}