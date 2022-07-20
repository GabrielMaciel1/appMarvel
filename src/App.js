import "./App.css";
import Header from "../src/components/Header";
import CharacterTable from "./components/CharacterTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { Helmet } from "react-helmet";

const hash = "bc251450d588088a4bad06cf14490a1c";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        // verificando se a matriz de favoritos está vazia ou não existe
        if (
          localStorage.getItem("favorites") === "[]" ||
          !localStorage.getItem("favorites")
        ) {
          localStorage.setItem("favorites", "[]");
          const result = await axios(
            `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=65b8b30ef15b0ac5d2c041d4e85a15bd&hash=${hash}`
          );
          console.log(result.data.data.results);
          setItems(result.data.data.results);
          setLoading(false);
        } else {
          let favorite = JSON.parse(localStorage.getItem("favorites"));
          setItems(favorite);
          setLoading(false);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=65b8b30ef15b0ac5d2c041d4e85a15bd&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="icon" />
      </Helmet>
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
