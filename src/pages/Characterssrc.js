// Character.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `http://localhost:4000/characters`
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
  const handleClik_characters = async (event, character_id) => {
    event.preventDefault();
  };

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <main>
      <p>Page personnage</p>
      <div className="page_characters">
        {data.results.map((character, index) => {
          return (
            <div className="test" key={index}>
              {/* <p>Fiche n°{index}</p> */}
              <Link to={`/character/${character._id}`}>
                <h2 className="title">{character.name} </h2>
                <div className="thumbnail_bottom">
                  <img
                    className="picture"
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt="imgfiche"
                  />
                  {/* <p>Id : {character._id} </p> */}
                  <p> {character.description} </p>
                  {/* {console.log({ characterId })} */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Characters;
