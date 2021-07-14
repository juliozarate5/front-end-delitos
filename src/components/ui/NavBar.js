import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext';
import { types } from '../../types/types';

export default function NavBar() {

    const history = useHistory();

    const {user: {name, logged}, dispatch } = useContext(AuthContext);
    const sendLogout = (e) => {
        e.preventDefault();
        history.replace('/login')
        dispatch({
            type: types.logout
        })
        localStorage.removeItem('user');
    }
    return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
    <Link className="navbar-brand" to="/login">HelpMeIUD</Link>
    <ul className="nav nav-pills">
        {
          !logged && (
            <NavLink
            className="nav-item nav-link" 
            to="/login"
            activeClassName="active"
            exact
          >
            Login
           </NavLink>
          )
        }

        {!logged && (<NavLink
            className="nav-item nav-link" 
            to="/register"
            activeClassName="active"
            exact
         >
            Registro
        </NavLink>)}
        <NavLink
            className="nav-item nav-link" 
            to="/map"
            activeClassName="active"
            exact
         >
            Mapa
        </NavLink>
        {logged && (
                    <NavLink
                    className="nav-item nav-link" 
                    to="/report"
                    activeClassName="active"
                    exact
                 >
                    Reportar
                </NavLink>
        )}
        {logged && (
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
            className="nav-item nav-link" 
            to="/about"
            activeClassName="active"
            exact
         >
            Acerca
        </NavLink>
        {logged && (
            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        {name}
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
