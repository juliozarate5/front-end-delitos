import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../components/About';
import LoginApp from '../components/login/LoginApp';
import Register from '../components/login/Register';
import MapView from '../components/maps/MapView';

export default function PublicRoutes() {
    return (
        <>
           <div>
             <Switch>
                <Route exact path="/login" component={ LoginApp }/>
                <Route exact path="/map" component={ MapView }/>
                <Route exact path="/about" component={ About } />
                <Route exact path="/register" component={ Register } />
             </Switch>   
            </div> 
        </>
    )
}
