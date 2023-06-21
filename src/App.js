import React, {useEffect, useState} from "react";
import searchImg from './search.png';
import './App.css';
import MovieList from './MovieList';

const App = () => {

  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=636e097b';                                                      

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchMovie();
  }, [])

  const searchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      setMovie(data.Search);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
    <div className="container">
      <div className="header">
        <h1>Movies App</h1>
        <div className="search">
          <input id="input" type="text" placeholder="Serach Movie" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.keyCode === 13 ? searchMovie(search) : ''}/>
          <img src={searchImg} alt="Search" onClick={() => searchMovie(search)}/>
        </div>
      </div>

      <div className="container-card">
        {movie?.length ? (
          movie.map((mov) => {
            return (
              <MovieList movie={mov}/>
            )
          })
        ) : (
          <div>No Movie Found.</div>
        )
        }
      </div>
    </div>
    </>
  )
}

export default App;