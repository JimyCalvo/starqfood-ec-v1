import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/firebase'

const Create = () => {
    const [ categoria, setCategoria ] = useState('')
    const [ disponibilidad, setDisponibilidad ] = useState('')
    const [ precio, setPrecio ] = useState(0)
    const [ producto, setProducto ] = useState('')
    const [ tiempo, setTiempo ] = useState(0)

    const navigate = useNavigate()

    const productsCollection = collection(db, "products")

    const store = async (e) => {
        e.preventDefault()
        await addDoc( productsCollection, { categoria: categoria,  disponibilidad: disponibilidad,  precio: precio,  producto: producto,  tiempo: tiempo } )
        navigate('/')
        //console.log(e.target[0].value)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <br></br>
                    <br></br>
                    <h1>CREAR PLATO</h1>
                    <br></br>
                    <br></br>
                    <form onSubmit={store}>                    
                        <div className='mb-3'>
                            <label className='form-label'>Categoria</label>
                            <input
                                value={categoria}
                                onChange={ (e)=> setCategoria(e.target.value)} 
                                type="text"
                                className='form-control'
                            />                 
                        </div> 
                        <div className='mb-3'>
                            <label className='form-label'>Disponibilidad</label>
                            <input
                                value={disponibilidad}
                                onChange={ (e)=> setDisponibilidad(e.target.value)} 
                                type="text"
                                className='form-control'
                            />                 
                        </div> 
                        <div className='mb-3'>
                            <label className='form-label'>Precio</label>
                            <input
                                value={precio}
                                onChange={ (e)=> setPrecio(e.target.value)} 
                                type="number"
                                className='form-control'
                            />                 
                        </div> 
                        <div className='mb-3'>
                            <label className='form-label'>Nombre del plato</label>
                            <input
                                value={producto}
                                onChange={ (e)=> setProducto(e.target.value)} 
                                type="text"
                                className='form-control'
                            />                 
                        </div> 
                        <div className='mb-3'>
                            <label className='form-label'>Tiempo [min]</label>
                            <input
                                value={tiempo}
                                onChange={ (e)=> setTiempo(e.target.value)} 
                                type="number"
                                className='form-control'
                            />                 
                        </div> 
                        <br></br>
                        <br></br> 
                        <div className="container text-center">
                            <button type='submit' className='btn btn-primary'>Guardar</button>         
                        </div>                         
                    </form>   
                </div>
            </div>
        </div> 
    )
}

export default Create