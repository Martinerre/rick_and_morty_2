import React from "react";
import styles from "./Forms.module.css"

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
        setUserData({ ...userData, [evento.target.name]: evento.target.value })
        setErrors(validate({ ...userData, [evento.target.name]: evento.target.value }))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault(); //previene la carga de las lineas siguientes

        let arrayConvertido = Object.entries(errors)

        if (arrayConvertido.length === 0) {
            // alert('Datos completos')
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
    }

    return <div className={styles.all} >
        <form onSubmit={handleSubmit}>
            {/* htmlFor conecta con id, de modo que cuando hagamos clic pase al input */}
            <label htmlFor="name" className={styles.name}>Nombre:</label>
            <input id='name' type="text" name="username" placeholder="Escribe tu usuario..." value={userData.name} onChange={handleChange} className={errors.username ? styles.warning : styles.input} /> <br />
            <p className={styles.danger}>{errors.username}</p>
            <label htmlFor="pasword" className={styles.name} >Password:</label>
            <input id='pasword' type="text" name="pasword" placeholder='Escribe el password...' value={userData.pasword} onChange={handleChange} className={errors.username ? styles.warning : styles.input} /> <br />
            <p className={styles.danger}>{errors.pasword}</p>
            <button className={styles.button} type='submit' >Enviar</button>
            <div className={styles.img} >
                <img srcSet="klipartz.png 320w,
                            klipartz.png 480w,
                            klipartz.png 800w"
                    sizes="(max-width: 400px) 200px,
                            (max-width: 600px) 250px,
                            480px"
                    src="klipartz.png" alt="imayen" />
            </div>
            <p>Para pruebas:  Nombre: martin Password: mm</p>
        </form>
    </div>
} 