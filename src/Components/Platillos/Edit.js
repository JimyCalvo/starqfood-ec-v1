import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from '../../firebaseConfig/firebase'

const Edit = () => {
    const [categoria, setCategoria] = useState('')
    const [disponibilidad, setDisponibilidad] = useState('')
    const [precio, setPrecio] = useState(0)
    const [producto, setProducto] = useState('')
    const [tiempo, setTiempo] = useState(0)

    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "products", id)
        const data = { categoria: categoria, disponibilidad: disponibilidad, precio: precio, producto: producto, tiempo: tiempo }
        await updateDoc(product, data)
        navigate('/')
    }

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "products", id))
        if (product.exists()) {
            //console.log(product.data())
            setCategoria(product.data().categoria)
            setDisponibilidad(product.data().disponibilidad)
            setPrecio(product.data().precio)
            setProducto(product.data().producto)
            setTiempo(product.data().tiempo)
        } else {
            console.log('El producto no existe')
        }
    }

    useEffect(() => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <br></br>
                    <br></br>
                    <h1>EDITAR PLATO</h1>
                    <br></br>
                    <br></br>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Categoria</label>
                            <input
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Disponibilidad</label>
                            <input
                                value={disponibilidad}
                                onChange={(e) => setDisponibilidad(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Precio</label>
                            <input
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                type="number"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Nombre del plato</label>
                            <input
                                value={producto}
                                onChange={(e) => setProducto(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Tiempo [min]</label>
                            <input
                                value={tiempo}
                                onChange={(e) => setTiempo(e.target.value)}
                                type="number"
                                className='form-control'
                            />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="container text-center">
                            <button type='submit' className='btn btn-primary'>Actualizar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit