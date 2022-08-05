// Character.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Characters = () => {
  let classthumbnail = "";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [characterId, setCharacterId] = useState("");
  const navigate = useNavigate();
  // if (input !== undefined) {
  //   classthumbnail = "testhide";
  // } else {
  //   classthumbnail = "test";
  // }
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
    await setCharacterId(character_id);
    console.log(character_id);
    navigate(`/character/${characterId}`);
  };

  console.log(data);
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
              <Link
                to="/character"
                onClick={(event) => {
                  console.log("character._id" + character._id);
                  handleClik_characters(event, character._id);
                }}
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
                  {/* <p>Id : {character._id} </p> */}
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
