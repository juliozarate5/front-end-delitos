import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext';
import { logout } from '../../services/AuthService';
import { types } from '../../types/types';

export default function NavBar() {

    const history = useHistory();

    const {user: {user}, dispatch, isAdmin } = useContext(AuthContext);
    const sendLogout = (e) => {
        e.preventDefault();
        history.replace('/login')
        dispatch({
            type: types.logout
        })
        logout();
    }
    return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
    {user && (
        <Link to="/profile" className="navbar-brand" tabindex="0" aria-label="Ir al Inicio">HelpMeIUD</Link>
    )}
    {!user && (
        <Link to="/login" className="navbar-brand" tabindex="0" aria-label="Ir al Inicio">HelpMeIUD</Link>
    )}
    
    <ul className="nav nav-pills">
        
        {
            //<!-- chromevox classic extension-->
          !user && (
            <NavLink
            tabIndex={1}
            data-target="#"
            className="nav-item nav-link" 
            to="/login"
            activeClassName="active"
            exact
          >
            Login
           </NavLink>
          )
        }

        {!user && (
        <NavLink
        tabIndex={2}
            className="nav-item nav-link" 
            to="/register"
            activeClassName="active"
            exact
         >
            Registro
        </NavLink>)}
        <NavLink
            tabIndex={3}
            className="nav-item nav-link" 
            to="/map"
            activeClassName="active"
            exact
         >
            Mapa
        </NavLink>
        {user && (
                    <NavLink
                    className="nav-item nav-link" 
                    to="/report"
                    activeClassName="active"
                    exact
                 >
                    Reportar
                </NavLink>
        )}
        {(user && isAdmin) && (
        <NavLink
            className="nav-item nav-link" 
            to="/delitos"
            activeClassName="active"
            exact
        >
            Delitos
        </NavLink>
        )}
        <NavLink
            tabIndex={4}
            className="nav-item nav-link" 
            to="/about"
            activeClassName="active"
            exact
         >
            Acerca
        </NavLink>
        {user && (
            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        {user.nombre}
                    </a>
                <ul className="dropdown-menu">
                <NavLink
                    className="dropdown-item" 
                    to="/profile"
                    exact
                 >
                     Mi Perfil
                 </NavLink>
                 <li><hr className="dropdown-divider"/></li>
                 <li>
                   <a className="dropdown-item"  href="#" onClick={sendLogout}>  Salir</a>
                 </li>
                </ul>
                </li>
        )}
    </ul>
    </nav>
    )
}
