import React from 'react'

export default function Register() {
    return (
        <div className="container">
            <div className="col-md-7 col-lg-8 my-3">
                <h1 className="d-none">1</h1>
                <h2 className="d-none">2</h2>
                <h3 className="d-none">3</h3>
                <h4 className="mb-3">Regístrate</h4>
                <form className="needs-validation" novalidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Nombre<span className="text-muted">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            placeholder="" 
                            value="" 
                            required=""
                        />
                        <div className="invalid-feedback">
                            Nombre es requerido
                        </div>
                        </div>

                        <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Apellido<span className="text-muted">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            placeholder="" 
                            value="" required=""
                        />
                        <div className="invalid-feedback">
                        Apellido requerido
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-muted">*</span></label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="you@example.com"
                        />
                        <div className="invalid-feedback">
                        Email es requerido
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="address" className="form-label">Contraseña<span className="text-muted">*</span></label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="address" 
                            placeholder="" 
                            required=""
                        />
                        <div className="invalid-feedback">
                            Contraseña requerida
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="address2" className="form-label">Fecha de Nacimiento <span className="text-muted">*</span></label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="address2" 
                            placeholder="Apartment or suite"
                        />
                        </div>
                    </div>

                    <hr className="my-4"/>

                    <div className="form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="save-info"
                        />
                        <label className="form-check-label" htmlFor="save-info">Aceptar <a href="#"> términos y condiciones </a></label>
                    </div>

                    <hr className="my-4"/>

                    <button 
                        className="w-50 btn btn-primary btn-lg" 
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
