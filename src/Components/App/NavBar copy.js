import React, { useState } from 'react'

function Navvbar() {

    const handleClick = () => {

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Star Q Food</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Platillo/Show">Platillos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Register">Crear Cuenta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/Login">Inicio de Sesion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navvbar

