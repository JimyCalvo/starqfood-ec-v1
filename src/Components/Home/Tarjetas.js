
const Tarjetas = () => {
  return (
    <div className="container-fluid">
      <div className="container fluid card-group mt-4 " >
        <div className="card text-center border-info">
          <div className="card-body">
            <h4 className="card-title">Alitas en Salsa</h4>
            <p className="card-text">unas alitas acompañadas de salsa bbq y un toque de picante son la esencia de uno de los platillos más sabrosos preparados con pollo. Contamos con diferentes Salsas las cuales quedan a su eleccion. </p>
            <img src="https://lanoticia.com/wp-content/uploads/2022/02/como-preparar-alitas-de-pollo-con-salsas-deliciosas-scaled.jpg" className="card-img-top" alt="..." />

          </div>
        </div>

        <div className="card text-center border-info">
          <div className="card-body">
            <h4 className="card-title">Hot Dog</h4>
            <p className="card-text">Panecillo largo lleno con una salchicha de Frankfurt, que se consume caliente, y untado de mostaza ligeramente dulce. Esta expresión estadounidense, aparecida hacia 1930, significa “perro caliente”.</p>
            <img src="https://www.latam.aviko.com/media/7625157/hotdog1.jpg?height=400&width=610&scale=both&mode=crop-up" className="card-img-top" alt="..." />

          </div>
        </div>

        <div className="card text-center border-info">
          <div className="card-body">
            <h4 className="card-title">Hamburguesa Doble</h4>
            <p className="card-text">Hamburguesa de Res Doble Carne, lechuga, tomate, mayonesa de la casa, salsa de tomate, Acompañado de una rica salsa BBQ o a su eleccion entre diferentes tipos.
              Acompañado de papas fritas.</p>
            <img src="https://progcarne.com/storage/app/uploads/public/608/6d1/8b0/6086d18b065a7811052900.jpg" className="card-img-top" alt="..."></img>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Tarjetas;