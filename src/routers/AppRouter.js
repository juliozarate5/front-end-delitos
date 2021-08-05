import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import About from '../components/About';


import LoginApp from '../components/login/LoginApp';
import Register from '../components/login/Register';
import MapView from '../components/maps/MapView';
import Footer from '../components/ui/Footer';
import NavBar from '../components/ui/NavBar';
import NoAuthorized from '../components/ui/NoAuthorized';
import MenuRoutes from './MenuRoutes';
import Privates from './Privates';

export default function AppRouter() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <NavBar />
            <main className="flex-shrink-0">
            <Switch>
                <Route exact path="/login" component={ LoginApp }/>
                <Route exact path="/map" component={ MapView }/>
                <Route exact path="/about" component={ About } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/noauthorized" component= { NoAuthorized}/>
                <Privates 
                    path="/" 
                    component={ MenuRoutes }
                    isAuthenticated= {user.logged}
                />
            </Switch>
            </main>
            <Footer year={new Date().getFullYear()}/>
        </Router>
    )
}
