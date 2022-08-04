import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import "../assets/css/header.scss";

const Header = () => {
  return (
    <header>
      <nav className="banner-left">
        <img src={logo} alt="" />
        <input className="find" type="text" />
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
