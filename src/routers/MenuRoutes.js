import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Perfil from '../components/user/Perfil';
import Reportar from '../components/cases/Reportar';
import Delitos from '../components/crimes/Delitos';

export default function MenuRoutes() {
    return (
        <>
           <div>
             <Switch>
                <Route exact path="/delitos" component={ Delitos } />
                <Route exact path="/report" component={ Reportar } />
                <Route exact path="/profile" component={ Perfil } />
                <Redirect to="/login"/>
             </Switch>   
            </div> 
        </>
    )
}
