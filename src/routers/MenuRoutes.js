import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Perfil from '../components/user/Profile';
import Reportar from '../components/cases/Reportar';
import Crimes from '../components/crimes/Crimes';
import NoAuthorized from '../components/ui/NoAuthorized';
import NotFound from '../components/ui/NotFound';

export default function MenuRoutes() {
    return (
        <Routes>
            <Route path="/delitos" element={ <Crimes/> } />
            <Route path="/report" element={ <Reportar/> } />
            <Route path="/profile" element={ <Perfil/> } />
            <Route path="*" element= { <NotFound />}/>
        </Routes> 
    )
}
