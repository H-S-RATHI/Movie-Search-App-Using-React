import React, { useState } from 'react';

import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';


function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchMovie)}&apikey=be8720d4`);
      const data = await res.json();

      if (data.Search && Array.isArray(data.Search)) {
        setAllMovieData(data.Search);
      } else {
        setAllMovieData([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  )
}

export default App;
