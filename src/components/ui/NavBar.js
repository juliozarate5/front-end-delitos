import React, { useContext, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext';
import { logout } from '../../services/AuthService';
import { types } from '../../types/types';
import './NavBar.css';

export default function NavBar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
    <nav 
        id="navbar-example2" 
        className="navbar navbar-expand-lg navbar-light bg-light px-3"
    >
            {user && (
        <Link to="/profile" className="navbar-brand" tabIndex={0} aria-label="Ir al Inicio">HelpMeIUD</Link>
    )}
    {!user && (
        <Link to="/login" className="navbar-brand" tabIndex={0} aria-label="Ir al Inicio">HelpMeIUD</Link>
    )}
    
     <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
     onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">


    <ul className="navbar-nav">
        
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
            <li className="nav-item dropdown logout">
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
                 <li >
                   <a className="dropdown-item"  href="#" onClick={sendLogout}>  Salir</a>
                 </li>
                </ul>
                </li>
        )}
    </ul>
    </div>
    </nav>
    )
}
