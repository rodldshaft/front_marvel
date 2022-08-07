// Character.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(`http://localhost:4000/characters`);

        setDatas(response.data);
        setIsLoading(false);
      };
      fetchCharacter();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const handleClik_characters = async (event) => {
    event.preventDefault();
    alert("clic ok");
  };

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <main>
      <p>Page personnage</p>
      <div className="page_characters">
        {datas.results.map((character, index) => {
          return (
            <div className="test" key={index}>
              <Link
                to={`/character/${character._id}`}
                // onClick={(event) => {
                //   handleClik_characters(event);
                // }}
              >
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
                  <p> {character.description} </p>
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
