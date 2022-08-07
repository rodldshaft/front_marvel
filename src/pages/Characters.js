// Character.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data_Characters, setData_Characters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip_Characters, setSkip_Characters] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 99;
  const [counter_Characters, setCounter_Characters] = useState();
  const [counter, setCounter] = useState(99);

  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `${process.env.SITE}/characters?limit=${limit}&skip=${skip_Characters}`
        );

        setData_Characters(response.data);

        setIsLoading(false);
        setCounter_Characters(response.data.count);
      };
      fetchCharacter();
    } catch (error) {
      console.log(error.message);
    }
  }, [skip_Characters]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <main>
      <nav className="nav_left">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => {
            setPage(page - 1); //erreur bt au changement de bouton
            setCounter(limit * page);
            setSkip_Characters(limit * page);
          }}
        >
          Page precedente
        </button>
        <p className="counter_pages">
          <span>fiche N°</span> {counter - limit} <span>à </span>
          {counter}
        </p>
        <button
          disabled={counter + limit <= counter_Characters ? false : true}
          onClick={() => {
            setPage(page + 1); //erreur bt au changement de bouton
            setCounter(limit * page);
            setSkip_Characters(limit * page);
          }}
        >
          {counter + limit <= counter_Characters
            ? "Page suivante"
            : "Fin des fiches"}
        </button>
      </nav>

      <p>Page personnage</p>
      <div className="page_characters">
        {data_Characters.results.map((character, index) => {
          return (
            <div className="test" key={index}>
              <Link to={`/character/${character._id}`}>
                <h2 className="title">{character.name}</h2>
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
