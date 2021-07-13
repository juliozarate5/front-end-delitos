import React from 'react'
import NavBar from '../ui/NavBar';
import MapEdit from '../maps/MapEdit';

export default function LoginApp(props) {
    const {title} = props;
    return (
        <>
        <NavBar title="HelpMeIUD"/>
        <MapEdit />
        <div className="container">
            <h1>{title}</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            <a href="#">
                <p>¿No estás registrado?</p>
            </a>
            </form>
        </div>
        </>
    )
}
