import styles from './About.module.css';
import React from "react";

export default function About(props) {
    return (
        <div className={styles.formatoDiv}>
            <div>
                <h2>Sobre mi y la app</h2>
                <p>Esta app es parte de una homework del bootcamp que estoy cursando de Desarrollador Full Stack de Henry; mi nombre es Martin y espero disfruten viendo y conociendo los personajes de la serie Rick & Morty.</p>
            </div>

           
            <div className={styles.formatoFoto}>
                <div>
                    <img src="/io.jpg" width="150" height="180" alt='imagen'></img>
                </div>
                <a href="https://www.linkedin.com/in/martinracedo-fullstack" target="_blank" rel="noreferrer">Mi CV en Linkedin</a>
                {/* tarjet abre el link en una pestaña nueva */}
            </div>
        </div>
    )
}

