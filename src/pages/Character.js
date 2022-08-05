// Characters.js
import { useState, useEffect } from "react";
import axios from "axios";
const Character = ({ characterId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  characterId = "5fcf91f4d8a2480017b91453";
  console.log("characterId zz" + characterId);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `http://localhost:4000/character/${characterId}`
          // `https://lereacteur-vinted-api.herokuapp.com/offers`
        );

        setData(response.data);
        setIsLoading(false);
        // console.log({ data });
        console.log("characterId" + characterId);
      };
      fetchCharacter();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // console.log(result.thunbnail);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div>
        <p>Page personnage</p>
        {data.item.map((character, index) => {
          return (
            <div className="test" key={index}>
              <p>Fiche n°{index}</p>

              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="imgfiche"
              />
              <p>Id : {character._id} </p>
              <p>Title : {character.title} </p>
              <p>Description : {character.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
