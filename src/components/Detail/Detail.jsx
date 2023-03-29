import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './Detail.css'
import { Link } from "react-router-dom";

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({
        name: "",
        status: "",
        specie: "",
        gender: "",
        origin: "",
        image: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID 1");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (

        <div className={styles.div}>
            <div className={styles.detail}>
                <div className={styles.detail2}>
                    <h2 className={styles.nombre}>{character.name}</h2>
                    <h3 className={styles.default}>Status: {character.status}</h3>
                    <h3 className={styles.default}>Especie: {character.species}</h3>
                    <h3 className={styles.default}>Género: {character.gender}</h3>
                    <h3 className={styles.default}>Origen: {character.origin?.name}</h3>

                </div>
            </div>
            <div className={styles.imagen}>
                <img src={character.image} alt='No encontrado' className={styles.img} />
                <Link to={'/home'}>
                    <button className={styles.button}>Volver</button>
                </Link>
            </div>
        </div>
       
    //    <div>
    //         <div>
    //             {character.name && (
    //                 <p>
    //                     <b>Name:</b>  {character.name}
    //                 </p>
    //             )}
    //             {character.status && (
    //                 <p>
    //                     <b>Status:</b> {character.status}
    //                 </p>
    //             )}
    //             {character.specie && (
    //                 <p>
    //                     <b>Specie:</b> {character.specie}
    //                 </p>
    //             )}
    //             {character.gender && (
    //                 <p>
    //                     <b>Gender:</b> {character.gender}
    //                 </p>
    //             )}
    //             {character.origin && (
    //                 <p>
    //                     <b>Origin:</b> {character.origin}
    //                 </p>
    //             )}
    //         </div>
    //         <button onClick={() => navigate('/home')}>Back To Home</button>
    //     </div>
    );
}
