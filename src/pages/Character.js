// Character.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const SITE = "https://v1marvel.herokuapp.com/";
// const SITE2 = "http://localhost:4000/";
const Character = () => {
  const { characterId } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(`${SITE}character/${characterId}`);

        setData(response.data);

        setIsLoading(false);
      };

      fetchCharacter();
    } catch (error) {
      console.log(error.message);
    }
  }, [characterId]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div className="character">
        <p>Page personnage {characterId}</p>
        <p>Id : {data._id} </p>
        <p>Title : {data.name} </p>
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt="imgfiche"
        />
        <p>description : {data.description} </p>
      </div>
    </div>
  );
};

export default Character;
