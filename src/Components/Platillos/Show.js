import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { async } from '@firebase/util';
const MySwal = withReactContent(Swal)

const Show = () => {
    //1 - configuramos los hooks
    const [products, setProducts] = useState([])

    //2 - referenciamos a la DB firestore
    const productsCollection = collection(db, "products")

    //3 - Funcion para mostrar TODOS los docs
    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        //console.log(data.docs)
        setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        //console.log(products)
    }
    //4 - Funcion para eliminar un doc
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
    }
    //5 - Funcion de confirmacion para Sweet Alert 2
    const confirmDelete = (id) => {
        MySwal.fire({
            title: '¿Elimina el plato?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                //llamamos a la fcion para eliminar   
                deleteProduct(id)
                Swal.fire(
                    '¡Eliminado!',
                    'Su plato ha sido eliminado.',
                    'éxito'
                )
            }
        })
    }
    //6 - usamos useEffect
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])
    //7 - devolvemos vista de nuestro componente
    return (
        <>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <br></br>
                        <br></br>
                        <h1>P L A T O S</h1>
                        <br></br>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Disponibilidad</th>
                                    <th>Precio [$]</th>
                                    <th>Plato</th>
                                    <th>Tiempo [min]</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.categoria}</td>
                                        <td>{product.disponibilidad}</td>
                                        <td>{product.precio}</td>
                                        <td>{product.producto}</td>
                                        <td>{product.tiempo}</td>
                                        <td>
                                            <Link to={`/edit/${product.id}`} className="btn btn-warning"><i className="fa-solid fa-pencil"></i></Link>
                                            {(" ")}
                                            <button onClick={() => { confirmDelete(product.id) }} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br></br>
                        <div className="d-grid gap-2">
                            <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show