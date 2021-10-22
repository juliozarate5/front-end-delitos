import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import {messages} from '../../utils/messages';
import Swal from 'sweetalert2';
import { login } from '../../services/AuthService';


export default function LoginApp({ history }) {

    const [off, setOff] = useState("off");
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const [req, setReq] = useState(false);
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    useEffect(() => {
        setOff("off");
        console.log('login')
    }, []);

    const handleValidation = () => {
        let errors = {};
        let isValid = true;
        //setReq(true);
        //Email
        if(!user.username){
            isValid = false;
            errors["username"] = "Email requerido";
        }else
        if(typeof user.username !== "undefined" && user.username!==''){
           let lastAtPos = user.username.lastIndexOf('@');
           let lastDotPos = user.username.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 
            && user.username.indexOf('@@') == -1 
            && lastDotPos > 2 
            && (user.username.length - lastDotPos) > 2)) {
              isValid = false;
              errors["username"] = "Email no válido";
            }
       }else{
            errors["username"] = "";
       }  
       // password
       if(!user.password){
            isValid = false;
            errors["password"] = "Contraseña requerida";
        }else{
            errors["password"] = "";
        }
       setErrors({...errors});
       return isValid;
   }

    const sendLogin = e => {
        e.preventDefault();
        if(handleValidation()){
            setLoading(true);
            login(user)
            .then(r => {
                const lastPath = localStorage.getItem('lastPath') || '/profile';
                dispatch({
                    type: types.login,
                    payload: {
                        user: r.data
                    }
                });
                history.replace(lastPath);
                setLoading(false);
            })
            .catch(e => {
                const {data} = e.response;
                console.log(data);
                setLoading(false);
                if(data.message)
                    return Swal.fire('Error', data.message, 'error');
                return Swal.fire('Error',messages.CREDS_INVALIDAS, 'error');
            });   
        } 
    };

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container">
            <div className="col-md-7 col-lg-8 my-3">
                <h1 className="d-none">1</h1>
                <h2 className="d-none">2</h2>
                <h3 className="d-none">3</h3>
                <h4 className="mb-3">Ingresa</h4>
                <form 
                    onSubmit={sendLogin}
                >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                        autoComplete={off}
                        name="username"
                        onChange={handleChange}
                        required={req} 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                    />
                    <div className="invalid-feedback d-block">
                        {errors.username}
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        autoComplete="new-password"
                        name="password"
                        onChange={handleChange}
                        required={req} 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                    />
                    <div className="invalid-feedback d-block">
                        {errors.password}
                    </div>
                </div>
                <button
                    disabled={loading ? 1: 0}
                    type="submit"
                    className="btn btn-primary"
                >
                {loading && (
                  <span 
                    class="spinner-border spinner-border-sm" 
                    role="status" 
                    aria-hidden="true"
                  >
                  </span>
                )}
                    Enviar
                </button>
                </form>
                <Link to="/register">
                    <p>¿No estás registrado?</p>
                </Link>
            </div>
        </div>
    )
}
