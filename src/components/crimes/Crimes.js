import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import NoAuthorized from '../ui/NoAuthorized';
import '../../index.css';
import Create from './Create';

export default function Crimes() {

    const {isAdmin } = useContext(AuthContext);

    return (
        <>
        {isAdmin &&
        (<div className="container">
            <div className="table-responsive mb-5">
                <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Agregado por</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">1</th>
                        <td>Hurto</td>
                        <td>cuando se quitan pertenencias</td>
                        <td>julio</td>
                        <td>
                            <button 
                                className="btn btn-outline-primary"
                                title="Editar"
                            >
                                <i class="fa fa-edit"></i>
                            </button>
                            <button 
                                className="btn btn-outline-danger"
                                title="Eliminar este"
                            >
                                <i class="fa fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">1</th>
                        <td>Acoso Sexual</td>
                        <td>Groserías a una persona</td>
                        <td>julio</td>
                        <td>
                            <button 
                                className="btn btn-outline-primary"
                                title="Editar"
                            >
                                <i class="fa fa-edit"></i>
                            </button>
                            <button 
                                className="btn btn-outline-danger"
                                title="Eliminar este"
                            >
                                <i class="fa fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <button 
                data-bs-toggle="modal" 
                href="#exampleModalToggle"
                className="btn btn-outline-success"
                title="Agregar nuevo"
                >
                    <i class="fas fa-plus-circle"></i>
            </button>
        </div>)
        }
        {
          !isAdmin && (
              <NoAuthorized />
          )  
        }
        <Create />
        </>
    )
}
