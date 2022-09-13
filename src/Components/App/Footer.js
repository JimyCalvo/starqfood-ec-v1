import React from "react";
const Footer = ( ) => {
    return(
        <div>
            <footer className=" text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        
                        
                        <ul className="col-12 col-md-5 list-unstyled">
                            <h4>Descripcion: </h4>
                            <li>Escuela politecnica Nacional</li>
                            <li>13/09/2022</li>
                            <li>Av. Ladrón de Guevara 253, 17-01-2759, Quito, Ecuador.</li>
                        </ul>
                        
                        <ul className="col-18 col-md-4 list-unstyled">
                            <h4>Miembros del equipo: </h4>
                            <li>Martin Rosero</li>
                            <li>Jimy Calvo</li>
                            <li>Roberto Chacon</li>
                            <li>Kevin Moreno</li>
                            <li>Pedro Paez</li>

                        </ul>

                        <ul className="col-12 col-md-3 list-unstyled">
                            <h4>Proyecto: </h4>
                            <li>Examen</li>
                            <li>Final</li>
                            <li className="d-flex justify-content-between">
                              <i className="bi bi-facebook"></i>
                              <i className="bi bi-whatsapp"></i>
                              <i className="bi bi-instagram"></i>
                              <i className="bi bi-twitter"></i>
                              <i className="bi bi-twitch"></i>
                            </li>
                            

                        </ul>

                        <div className="row">
                           <p className="col-sm">
                           &copy;{new Date().getFullYear()} DISENO DE INTERFACES | All right reserved | Terms of service | Privacy
                           </p>
                        </div>

                    </nav>
                </div>
            </footer>
        </div>
       
    )
}

export default Footer;

