import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import {messages} from '../../utils/messages';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/AuthService';

export default function LoginApp({ history }) {

    const { dispatch } = useContext(AuthContext);

    const sendLogin = () => {
        console.log(messages.ERROR_GENERAL);
        const user = {
            username: 'julio.martinez@iudigital.edu.co', 
            password: '123456'
        };
        AuthService.login(user)
        .then(r => console.log(r))
        .catch(e => console.log(e));
        
        const lastPath = localStorage.getItem('lastPath') || '/profile';
        dispatch({
            type: types.login,
            payload: {
                name: 'Julio'
            }
        });
        history.replace(lastPath);
        return Swal.fire('Error','Error al Logear', 'error');
    };

    return (
        <>
        <div className="container">
            <h1>Login</h1>
        
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button onClick={ sendLogin } className="btn btn-primary">Enviar</button>
            <Link to="/">
                <p>¿No estás registrado?</p>
            </Link>
            <Link to="/">
                <p>Recuperar contraseña</p>
            </Link>
        </div>
        </>
    )
}
