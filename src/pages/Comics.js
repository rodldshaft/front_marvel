import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Comics = () => {
  const [comicId, setComicId] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchCharacter = async () => {
        const response = await axios.get(`http://localhost:4000/comics`);

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
        <p>Page Comics</p>
        {data.results.map((result, index) => {
          // console.log(result[0].thumbnail.path);
          // console.log(result.description);
          // const keys = Object.keys(item);
          // return <p key={index}>{result}</p>;
          // {const pathpicture=({result.thumbnail.path} + ".jpeg" )}
          return (
            <div className="comic" key={index}>
              <Link to={`/comic/${result._id}`}>
                <p>Fiche n°{index}</p>

                <img src={result.thumbnail.path + ".jpg"} alt="imgfiche" />
                <p>Id : {result._id} </p>
                <p>Title : {result.title} </p>
                <p>Description : {result.description} </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
