import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [characterId, setCharacterId] = useState("");
  const navigate = useNavigate();
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
    navigate("/character");
  };

  console.log(data);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <main className="page_characters">
      <div>
        <p>Page personnage</p>
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
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="imgfiche"
                />
                {/* <p>Id : {character._id} </p> */}
                <p>Title : {character.title} </p>
                {/* <p>Description : {character.description} </p> */}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Characters;
