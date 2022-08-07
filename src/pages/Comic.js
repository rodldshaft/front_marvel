import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comic = () => {
  const comicId = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `${process.env.SITE3}comic/${comicId}`
        );

        setData(response.data);
        setIsLoading(false);
      };
      fetchCharacter();
    } catch (error) {
      console.log(error.message);
    }
  }, [comicId]);

  // console.log(result.thunbnail);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div>
        <p>Page Comics</p>
        {console.log(data)}
      </div>
    </div>
  );
};

export default Comic;
