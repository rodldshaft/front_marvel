// Character.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data_Characters, setData_Characters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip_Characters, setSkip_Characters] = useState(60);
  const [page, setPage] = useState(1);
  const [count_pages, setCountPages] = useState();
  // const skip_Characters = 12;
  // console.log(skip_Characters);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `http://localhost:4000/characters?skip=${skip_Characters}`
        );

        setData_Characters(response.data);
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
      <nav className="nav_left">
        <button
          onClick={() => {
            setSkip_Characters(6 * (page - 1));
            console.log({ skip_Characters });
          }}
        >
          Page precedente
        </button>
      </nav>

      <p>Page personnage</p>
      <div className="page_characters">
        {data_Characters.results.map((character, index) => {
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
