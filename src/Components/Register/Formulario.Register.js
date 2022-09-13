import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';


const Formulario = () => {

    const { register, watch, setValue, unregister, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            'codtipo_fk': 'CL2'
        }
    });

    const onSubmit = async (datos) => {
        if (code2 == true) {
            valor = 'CL2';
            console.log("entre en if", valor);
        } else {
            valor = 'CL1';
            console.log("entre en else", valor);
        }
        console.log("pase por aqui..", code2);

        setValue('codtipo_fk', valor)
        try {

           
            console.log("Datos Enviandos");
            

        } catch (error) {
            console.long(error)
        }
    }
    const code2 = watch('code');
    var valor = "";

    const password = useRef({});
    password.current = watch("password", "");
    const siguiente = watch('code');
    return <div className='container-fluid text-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='col-12 mb-3'>
                <input className="form-control" type="text" id="nombre"
                    placeholder="Nombre(s)" width="100%"
                    {...register('nameuser', {
                        required: true,
                        maxLength: 35,
                        minLength: 3,
                        pattern: /^[a-zA-Z ]*$/,
                    })} />
                {errors.nameuser?.type === 'required' && <p className='text-danger'>Ingrese el "Nombre" este campo es obligatorio.</p>}
                {errors.nameuser?.type === 'maxLength' && <p className='text-danger'>El Nombre es demaciado largo se permite un total de 35 Caracteres.</p>}
                {errors.nameuser?.type === 'minLength' && <p className='text-danger'>El Nombre es demaciado corto se permite un minimo de 3 Caracteres.</p>}
                {errors.nameuser?.type === 'pattern' && <p className='text-danger'>El Nombre contine solo caracateres entre A-Z .</p>}

            </div>
            <div className='col-12 mb-3'>
                <input className="form-control" type="text" name="lastnameuser" id="apellido"
                    placeholder="Apellido(s)" width="100%" maxLength={40} {...register('lastnameuser', {
                        required: true,
                        maxLength: 35,
                        minLength: 3,
                        pattern: /^[a-zA-Z\-]+$/,
                    })} />
                {errors.lastnameuser?.type === 'required' && <p className='text-danger'>Ingrese el "Apellido" este campo es obligatorio.</p>}
                {errors.lastnameuser?.type === 'maxLength' && <p className='text-danger'>El Apellido es demaciado largo se permite un total de 35 Caracteres.</p>}
                {errors.lastnameuser?.type === 'minLength' && <p className='text-danger'>El Apellido es demaciado corto se permite un minimo de 3 Caracteres.</p>}
                {errors.lastnameuser?.type === 'pattern' && <p className='text-danger'>El Apellido contine solo caracateres entre A-Z .</p>}

            </div>
            <div className='col-12 mb-3'>
                <input type="email" name="email" id="email" className="form-control "
                    placeholder="Correo Electrónico" {...register('email', {
                        required: true,
                        maxLength: 80,
                        pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

                    })}
                />
                {errors.email?.type === 'required' && <p className='text-danger'>Ingrese el "Correo" este campo es obligatorio.</p>}
                {errors.email?.type === 'maxLength' && <p className='text-danger'>El Correo es demaciado grande Maximo 80 carcateres.</p>}
                {errors.email?.type === 'pattern' && <p className='text-danger'>El Correo ingresado es incorrecto.</p>}

            </div>
            <div className='col-12 mb-3'>
                <input type="text" name="username" id="usuario" className="form-control"
                    placeholder="Nombre-Usuario" maxLength={40} {...register('username', {
                        required: true,
                        maxLength: 35,
                        pattern: /^[a-zA-Z0-9]+$/
                    })} />
                {errors.username?.type === 'required' && <p className='text-danger'>Ingrese el "Nombre de Usuario" este campo es obligatorio.</p>}
                {errors.username?.type === 'maxLength' && <p className='text-danger'>El Nombre de Usuario es demaciado grande Maximo 35 carcateres.</p>}
                {errors.username?.type === 'pattern' && <p className='text-danger'>Solo se permite el ingreso de caracteres alfanumericos</p>}
            </div>
            <div className='col-12 mb-3'>
                <input id="telf" type="tel" name="telfuser" className="form-control " placeholder="Num. Teléfono"
                    {...register('telfuser', {
                        minLength: 5,
                        maxLength: 13,
                        pattern: /^([0-9])*$/,
                    })} />
                {errors.telfuser?.type === 'pattern' && <p className='text-danger'>Solo se apdmite numeros en este campo.</p>}
                {errors.telfuser?.type === 'maxLength' && <p className='text-danger'>Solo se apdmite numeros en este campo maximo 13 y minimos 5.</p>}
                {errors.telfuser?.type === 'minLength' && <p className='text-danger'>Solo se apdmite numeros en este campo maximo 13 y minimos 5.</p>}
            </div>
            <div className='col-12 mb-3'>
                <input type="password" id="password" className="form-control" placeholder="Contraseña" name='password' {...register('password', {
                    required: true,
                    pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                })} />
                {errors.password?.type === 'required' && <p className='text-danger'>Ingrese una "Contraseña" este campo es obligatorio.</p>}
                {errors.password?.type === 'pattern' && <p className='text-danger'>La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
                    NO puede tener otros símbolos.</p>}

            </div>
            <div className='col-12 mb-3'>
                <input type="password" id="password2" className="form-control " name='password2'
                    placeholder="Confirmar Contraseña" {...register('password2', {
                        required: true,
                        validate: value =>
                            value === password.current
                    })} />
                {errors.password2?.type === 'required' && <p className='text-danger'>Ingrese la Contraseña este campo es obligatorio.</p>}
                {errors.password2?.type === 'validate' && <p className='text-danger'>La Contraseña son distintas.</p>}
            </div>
            <div className='row mb-3 mt-3 ' >
                <div className='col-xl-5 text-start'>
                    <label ><h6>Fecha de Nacimiento: </h6> </label>
                </div>
                <div className='col-xl-7 mb-3'>
                    <input id="startDate" className="form-control" type="date" min="1900-01-01" max="2020-12-31" name='fechanac'{...register('fechanac', {
                        required: true,
                    })} />
                    {errors.fechanac?.type === 'required' && <p className='text-danger'>Ingrese una "Fecha de Nacimiento" este campo es obligatorio.</p>}
                </div>
                <div className='container text-start p-3'>
                    <label>
                        <input type="checkbox" required /> Acepto las <a href="#">Condiciones del Servicio</a> y politicas
                        de privacidad
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className='container-fluid text-center'>
                {!siguiente && (
                    <div className="container-fluid">
                        <button className="btn btn-primary btn-block fa-lg mb-3 rounded-pill w-50" type="submit"
                        >Crear Cuenta</button>
                    </div>
                )}

                {siguiente && (
                    <div className="container-fluid ">
                        <button className="btn btn-primary btn-block fa-lg mb-3 rounded-pill w-50" type="submit"
                        >Siguiente</button>
                    </div>
                )}


                <div className="row justify-content-center align-items-center">
                    <div className="col-6 form-check form-switch p-0">

                        <label><input type="checkbox" className='form-check-input' id='codtipo'  {...register('code')} />Registrar Negocio </label>

                    </div>
                    <div className="col-6 p-0">
                        <a className="text-end" href="/">Cancelar</a>
                    </div>
                </div>
            </div>
        </form>

    </div >
}
export default Formulario

