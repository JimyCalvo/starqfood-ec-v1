import React from 'react';
import '../../css/register.css';
import logo from '../../img/Logo.jpg';
import img1 from '../../img/Quito_Noche.svg';
import img2 from '../../img/user-avatar.svg';
import marco from '../../img/Marco.svg';
import Formulario from './Formulario.Register';


function Register() {
    const fondoForm = { 'backgroundColor': 'rgba(255, 255, 255, 0.849)' }
    return (
        <div id='register-container' className='container-fluid m-0 p-0 p-sm-3 p-lg-5'>
            <div className="container-fluid pt-0 pt-sm-4 pb-4 ps-lg-5 pe-lg-5">
                <div className="row justify-content-center" style={fondoForm}>
                    {/* <!-- ========== Start img-componet ========== --> */}
                    <div className="col-12 d-sm-none d-md-block col-md-7 m-0 p-0 register-img ">
                        <div className="card rounded-0 border-0 d-sm-none ">
                            <img src={img1} className="card-img rounded-0 " alt="password-img" />
                            <img src={img2}
                                className="card-img-overlay img-fluid p-0 mt-5 position-absolute start-50 translate-middle-x"
                                alt="icono" width="100px" />
                            <img src={marco} className="card-img-overlay img-fluid p-0 " id='Marco' atl='Marcos' />
                        </div>
                    </div>
                    {/* <!-- ========== End img-componet ========== --> */}
                    <div className="col-12 col-sm-8 col-md-5 p-3 p-sm-0 p-md-3 ">
                        {/* <!-- ========== Start logo ========== --> */}
                        <div className=" d-none d-sm-block container text-center">
                            <figure className="container pt-5">
                                <img className="img-fluid" src={logo} alt="logo" width="60%" />
                                <h6 className="mt-1 me-3 text-end"><em>Conecta tu Comida .... </em></h6>
                            </figure>
                        </div>
                        {/* <!-- ========== End logo ========== --> */}
                        <div className=" border-0 rounded-0 p-2 ">
                            <h2 className="text-center">Registro de Cuenta</h2>
                            {/* <!-- ========== Start Form-UserRegister ========== --> */}
                            <div className='container text-center'>
                                <Formulario/>

                            </div>
                            {/* <!-- ========== End Form-UserRegister ========== --> */}
                            <script>
                            </script>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Register