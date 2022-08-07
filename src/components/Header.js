import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import "../assets/css/header.scss";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (input) => {
    console.log(input);
    navigate(`/characters`);
  };
  return (
    <header>
      <nav className="banner-left">
        <img src={logo} alt="" />
        <input
          className="search"
          type="text"
          value={input}
          onChange={(find) => {
            setInput(find.target.value);
            search(input);
          }}
        />
      </nav>

      <nav className="banner-right">
        <Link to="/characters">Personnages</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favoris">Favoris</Link>
      </nav>
    </header>
  );
};

export default Header;
