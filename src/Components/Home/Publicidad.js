import React from "react";

const Publicidad = ( ) =>{
    return(
      <div id="public" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img title="Publicidad" src="https://img.freepik.com/psd-gratis/plantilla-banner-horizontal-comida-rapida_23-2149058364.jpg?size=626&ext=jpg"  alt="Publicidad" width={500} height='200'/>
        </div>
        <div className="carousel-item">
          <img title="Publicidad" src="https://img.freepik.com/psd-premium/plantilla-banner-comida-rapida_23-2148609079.jpg"  alt="Publicidad" width={500} height='200' />
        </div>
        <div className="carousel-item">
          <img title="Publicidad" src="https://img.freepik.com/psd-premium/plantilla-anuncio-banner-comida-rapida_23-2148747067.jpg" className="d-block w-100" alt="Publicidad" width={500} height='200'/>
        </div>
      </div>
    </div>
    )
}

export default Publicidad