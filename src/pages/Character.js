import { useState, useEffect } from "react";
import axios from "axios";
const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `http://localhost:4000/character`
          // `https://lereacteur-vinted-api.herokuapp.com/offers`
        );

        setData(response.data);
        setIsLoading(false);
        // console.log({ data });
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
        {data.results.map((character, index) => {
          // console.log(result[0].thumbnail.path);
          // console.log(result.description);
          // const keys = Object.keys(item);
          // return <p key={index}>{result}</p>;
          // {const pathpicture=({result.thumbnail.path} + ".jpeg" )}
          // "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c"
          //<img src={character.thumbnail.path + ".jpeg"} alt="imgfiche" />
          return (
            <div className="test" key={index}>
              <p>Fiche n°{index}</p>

              <img
                src="http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c.jpeg"
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
