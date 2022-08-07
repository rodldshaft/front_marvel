// Character.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const Character = () => {
  const { characterId } = useParams();
  // console.log("page character :" + characterId);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const characterId = "5fcf91f4d8a2480017b91453";
  // console.log("characterId zz : " + characterId);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `http://localhost:4000/character/${characterId}`
          // `https://lereacteur-vinted-api.herokuapp.com/offers`
        );

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
        {/* {data.results.comics.map((comics, index) => {
          <div className="char">comics</div>;
        })} */}
      </div>
    </div>
  );
};

export default Character;
