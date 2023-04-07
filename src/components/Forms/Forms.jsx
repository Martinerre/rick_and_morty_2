import React from "react";
// import styles from "./Forms.module.css"

const regexPwd = /./;

export function validate(userData) {
    let errors = {};
    if (!userData.username) errors.username = 'Se requiere un nombre';
    if (!regexPwd.test(userData.pasword)) errors.pasword = 'Password incorrecto';
    return errors;
}

export default function Form(props) {
    // console.log(props);
    const [userData, setUserData] = React.useState({
        username: '',
        pasword: '',
    })

    const [errors, setErrors] = React.useState({
        username: '',
        pasword: '',
    })
    
    const handleChange = (evento) => {
        // console.log(evento.target)   
        setUserData({ ...userData, [evento.target.name]: evento.target.value })
        setErrors(validate({ ...userData, [evento.target.name]: evento.target.value }))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault(); //previene la carga de las lineas siguientes

        let arrayConvertido = Object.entries(errors)
        // console.log(arrayConvertido);

        if (arrayConvertido.length === 0) {
            alert('Datos completos')
            setErrors(validate({
                username: '',
                pasword: '',
            }));
            setUserData({
                username: '',
                pasword: '',
            })
        }
        else { alert('Debe llenar todos los campos') }
        props.login(userData) //aqui habilita el navigation
        console.log(userData);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            {/* htmlFor conecta con id, de modo que cuando hagamos clic pase al input */}
            <label htmlFor="name">Nombre:</label>
            <input id='name' type="text" name="username" placeholder="Escribe tu usuario..." value={userData.name} onChange={handleChange} className={errors.username && 'warning'} /> <br />
            <p className='danger'>{errors.username}</p>
            <label htmlFor="pasword">Password:</label>
            <input id='pasword' type="text" name="pasword" placeholder='Escribe el password...' value={userData.pasword} onChange={handleChange} className={errors.pasword && 'warning'} /> <br />
            <p className='danger'>{errors.pasword}</p>
            <button type='submit' >Enviar</button>
        </form>
    </div>
}