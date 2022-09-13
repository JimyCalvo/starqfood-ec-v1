import React from 'react'
import logo from '../../img/Logo.jpg';
import img1 from '../../img/Marco.svg'
import img2 from '../../img/user-avatar.svg'
import img3 from '../../img/Quito_tarde.svg'
import '../../css/login.css'


function Login() {
    const fondoForm = { 'backgroundColor': 'rgba(255, 255, 255, 0.849)' }
    return (
        <div id="login-container"className='container-fluid m-0 p-0'>
            <div className="container-fluid p-0 p-sm-4 p-md-5" id='form_container'>
                <div className='row justify-content-center flex-column-reverse flex-sm-row ' style={fondoForm}>
                    <div className="col-12 col-sm-8 col-md-5 p-3 p-sm-0  ">
                        {/* <!-- ========== Start logo ========== --> */}
                        <div className=" d-none d-sm-block container text-center">
                            <figure className="container pt-5">
                                <img className="img-fluid" src={logo} alt="logo" width="40%" />
                                <h6 className="mt-1 me-3 text-end "><p>Conecta tu Comida .... </p></h6>
                            </figure>
                        </div>
                        {/* <!-- ========== End logo ========== --> */}
                        {/* <!-- ========== Start form-login ========== --> */}
                        <form>
                            <div className="container pb-4 pt-1 ps-5 pe-5">
                                <div className="container p-2">
                                    <h1 className="text-center mb-3">Bienvenido</h1>
                                    <h4 className="text-center mb-4">Ingrese a su cuenta</h4>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="email" id="form2Example11" className="form-control"
                                        placeholder="Correo Electrónico" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form2Example22" className="form-control"
                                        placeholder="Contraseña" />
                                </div>
                                <a className="text-muted text-center" href="#!">¿Olvidaste tu contraseña?</a>
                                <div className="text-center mt-2 pt-1 mb-2 pb-1">
                                    <button className="btn btn-primary btn-block fa-lg mb-3 rounded-pill" type="button"
                                    >Iniciar Sesión
                                    </button>
                                </div>

                                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center pb-2 mt-3">
                                    <p className="mb-0 me-2">¿No tienes cuenta?</p>
                                    <a className="text-muted text-center" href="#">Crear Cuenta</a>
                                </div>
                            </div>
                        </form>
                        {/* <!-- ========== End form-login ========== --> */}
                    </div>
                    {/* <!-- ========== Start img-componente ========== --> */}
                    <div className="col-12 d-sm-none d-md-block col-md-7 m-0 p-0 login-img ">
                        <div className="card rounded-0 border-0 d-sm-none ">
                            <img src={img3} className="card-img rounded-0 " alt="password-img" width="100%" />
                            <img src={img2}
                                className="card-img-overlay img-fluid p-0 mt-5 position-absolute start-50 translate-middle-x"
                                alt="icono" />
                            <img src={img1} className="card-img-overlay img-fluid p-0 " id='Marco' />
                        </div>
                        <div className="d-none d-md-block text-light px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0 p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* <!-- ========== End img-componente ========== --> */}
                </div>
            </div>

        </div>
    )
}
export default Login