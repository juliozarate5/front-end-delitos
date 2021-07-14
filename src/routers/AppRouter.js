import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import About from '../components/About';


import LoginApp from '../components/login/LoginApp';
import Register from '../components/login/Register';
import MapView from '../components/maps/MapView';
import NavBar from '../components/ui/NavBar';
import MenuRoutes from './MenuRoutes';
import Privates from './Privates';
import Publics from './Publics';

export default function AppRouter() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <NavBar />
            <div>
            <Switch>
                <Route exact path="/login" component={ LoginApp }/>
                <Route exact path="/map" component={ MapView }/>
                <Route exact path="/about" component={ About } />
                <Route exact path="/register" component={ Register } />
                <Privates 
                    path="/" 
                    component={ MenuRoutes }
                    isAuthenticated= {user.logged}
                />
            </Switch>
            </div>
        </Router>
    )
}
