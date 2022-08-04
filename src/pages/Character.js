import axios from "axios";


const Character = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        try {
          const fetchCharacter = async () => {
            const response = await axios.get(
              `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}`
            setData(response.data);
            setIsLoading(false);
          };
          fetchCharacter();
        } catch (error) {
          console.log(error.message);
        }
      }, [page]);
      return isLoading === true ? (
        <div>En cours de chargement</div>
      ) : (
        return (
    <div>
      <div>Character</div>
    </div>);
  
  );
};

export default Character;
