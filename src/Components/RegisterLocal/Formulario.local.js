import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const imgStyle = { max_height: '40vw', background: 'rgb(130,130,130)', background:'linear-gradient(85deg, rgba(130,130,130,0.22172619047619047) 100%, rgba(7,53,150,0.5886729691876751) 100%)' }


const Formulario = () => {
    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const removeSelectedImage = () => {
        setSelectedImage();
    };
    const { register, watch, setValue, unregister, formState: { errors }, handleSubmit } = useForm({});
    const onSubmit = async (datosLocal) => {
        try {

            console.log("Datos Enviandos");
            // console.log(respose)
            console.log(datosLocal)
        } catch (error) {
            console.long(error)
        }
    }

    return <>
        <div className='continer-fluid text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-3 '>
                    <div className='col-12 mb-3 '>
                        <input className="form-control" type="organization" name="nombreLocal" id="nombreLocal"
                            placeholder="Nombre Local" width="100%" maxLength="40" required {...register('namelocal', {
                                required: true,
                                maxLength: 40,
                                pattern: /^[^\\\/<>=*&]*$/
                            })} />
                        {errors.namelocal?.type === 'required' && <p className='text-danger'>Ingrese el "Nombre del Local" este campo es obligatorio.</p>}
                        {errors.namelocal?.type === 'maxLength' && <p className='text-danger'>El Nombre del Local es demaciado grande Maximo 40 carcateres.</p>}
                        {errors.namelocal?.type === 'pattern' && <p className='text-danger'>No se permite el ingreso de caracteres especiales </p>}
                    </div>
                    <div className='col-12 mb-3'>
                        <input type="email" name="emailLocal" id="emailLocal" className="form-control"
                            placeholder="Correo Electrónico - Local" maxLength="80" required {...register('email', {
                                required: true,
                                maxLength: 80,
                                pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

                            })} />
                        {errors.email?.type === 'required' && <p className='text-danger'>Ingrese el "Correo" este campo es obligatorio.</p>}
                        {errors.email?.type === 'maxLength' && <p className='text-danger'>El Correo es demaciado grande Maximo 80 carcateres.</p>}
                        {errors.email?.type === 'pattern' && <p className='text-danger'>El Correo ingresado es incorrecto </p>}
                    </div>
                    <div className='col-12 mb-3'>
                        <input type="tel" name="telflocal" className="form-control"
                            placeholder="Num. Teléfono" maxLength="13" {...register('telflocal', {
                                minLength: 5,
                                maxLength: 13,
                                pattern: /^([0-9])*$/,
                            })} />
                        {errors.telflocal?.type === 'pattern' && <p className='text-danger'>Solo se apdmite numeros en este campo.</p>}
                        {errors.telflocal?.type === 'maxLength' && <p className='text-danger'>Solo se apdmite numeros en este campo maximo 13 y minimos 5.</p>}
                        {errors.telflocal?.type === 'minLength' && <p className='text-danger'>Solo se apdmite numeros en este campo maximo 13 y minimos 5.</p>}
                    </div>
                    <div className='col-12 mb-3'>
                        <input type="url" name="webLocal" id="webLocal" className="form-control"
                            placeholder="Correo Electrónico - Local" maxLength="81" {...register('webLocal', {
                                maxLength: 80,
                                pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
                            })} />
                        {errors.webLocal?.type === 'maxLength' && <p className='text-danger'>La Direccion es demaciado grande Maximo 80 carcateres.</p>}
                        {errors.webLocal?.type === 'pattern' && <p className='text-danger'>El Correo ingresado es incorrecto. Ejm: https://www.google.com/</p>}
                    </div>
                    <div className="col-12 text-start pb-4">
                        <h6 className="mb-3">Añadir imagen o logo:</h6>
                        <input className="form-control" name="logo" id="imagenSubida" type="file" accept='image/*' onChange={imageChange} />
                    </div>
                    {selectedImage && (
                        <div className='container text-center p-2 '>
                            <img className="img-fluid rounded p-4" id='img-preview'style={imgStyle} src={URL.createObjectURL(selectedImage)}/>
                            <button className=" btn btn-light btn-block fa-lg mb-1 mt-2 rounded-0 w-50  border border-primary rounded-pill" onClick={removeSelectedImage} >
                                Eliminar Imagen
                            </button>
                        </div>)}
                </div>
                <button className="btn btn-primary btn-block fa-lg mb-3 rounded-pill w-50" type='submit'>Siguiente</button>
            </form>
        </div >
    </>


}
export default Formulario