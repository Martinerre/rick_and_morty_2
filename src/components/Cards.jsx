import Card from './Card';
import characters from '../data';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {
         characters.map((char) => (
            <Card
               id={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               onClose={() => alert("Emulamos que se cierra la card")}
            />
         )
            // <ul>
            //    <h3>{char.name}</h3>
            //    <h3>{char.species}</h3>
            //    <h3>{char.gender}</h3>
            //    <image src={char.image} />
            // </ul>
         )
      }
   </div>;
}


