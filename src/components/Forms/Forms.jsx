import React from "react";
import styles from "./Forms.module.css"

const regexPwd = /./;

export function validate(inputs) {
    let errors = {};
    if (!inputs.name) errors.name = 'Se requiere un nombre';
    if (!regexPwd.test(inputs.pwd)) errors.pwd = 'Password incorrecto';
    return errors;
}

export default function Form(props) {

    const [inputs, setInputs] = React.useState({
        name: '',
        pwd: '',
    })

    const [errors, setErrors] = React.useState({
        name: '',
        pwd: '',
    })
    
    const handelChange = (evento) => {
        // console.log(evento.target)
        setInputs({ ...inputs, [evento.target.name]: evento.target.value })
        setErrors(validate({ ...inputs, [evento.target.name]: evento.target.value }))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault(); //previene la carga de las lineas siguientes
        let arrayConvertido = Object.entries(errors)
        // console.log(arrayConvertido);
        if (arrayConvertido.length === 0) {
            alert('Datos completos')
            setErrors(validate({
                name: '',
                pwd: '',
            }));
            setInputs({
                name: '',
                pwd: '',
            })
        }
        else { alert('Debe llenar todos los campos') }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            {/* htmlFor conecta con id, de modo que cuando hagamos clic pase al input */}
            <label htmlFor="name">Nombre:</label>
            <input id='name' type="text" name="name" placeholder="Escribe tu usuario..." value={inputs.name} onChange={handelChange} className={errors.name && 'warning'} /> <br />
            <p className='danger'>{errors.name}</p>
            <label htmlFor="pwd">Password:</label>
            <input id='pwd' type="text" name="pwd" placeholder='Escribe el password...' value={inputs.pwd} onChange={handelChange} className={errors.pwd && 'warning'} /> <br />
            <p className='danger'>{errors.pwd}</p>
            <button type='submit' >Enviar</button>
        </form>
    </div>
}