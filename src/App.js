import "dotenv/config"; // es6
// require("dotenv").config(); ES5
//console.log(process.env)

// import express from "express";
import "./App.scss";

//lien vers le fichier css

//lien vers le browserRouter  (avec alias Router) du package react-router-dom
// alias qui simplifie la syntaxe
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//lien vers les elements composants de la page home et signup qui sont des composants
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
// require("dotenv").config();
// fonction des base react
function App() {
  return (
    // Router est la balise (du a l'alias au dessus) react-router-dom qui encadre le HTML
    // route est la balise qui encadre toutes les routes de L'api
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:comicId" element={<Comic />} />
      </Routes>
    </Router>
  );
}

export default App;
