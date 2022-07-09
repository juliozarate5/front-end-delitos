import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Perfil from '../components/user/Profile';
import Reportar from '../components/cases/Reportar';
import Crimes from '../components/crimes/Crimes';

export default function MenuRoutes() {
    return (
        <>
           <div>
             <Switch>
                <Route exact path="/delitos" component={ Crimes } />
                <Route exact path="/report" component={ Reportar } />
                <Route exact path="/profile" component={ Perfil } />
                <Redirect to="/login"/>
             </Switch>   
            </div> 
        </>
    )
}
