import React, { useState } from 'react';

import { moviesData } from './components/MoviesData';
import Search from './components/Search';
import MoviesList from './components/MovieList';
import AddMovie from './components/AddMovie';

import './App.css';

function Main() {
const [moviesList, setMoviesList] = useState(moviesData);
const [searchMovie, setSearchMovie] = useState('');
const [ratingSearch, setRatingSearch] = useState(1);

const AddNewMovie = (e, newMovie) => {
  e.preventDefault();
  setMoviesList([...moviesList, newMovie]);
  moviesData.push(newMovie)
};

    return (
      <div className='App'>
        <h1 className="tunibest">TuniBest</h1>
        <Search
          setSearchMovie={setSearchMovie}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        />
        <AddMovie AddNewMovie={AddNewMovie} />
        <MoviesList
          moviesList={moviesList}
          searchMovie={searchMovie}
          ratingSearch={ratingSearch}
        />
        
      </div>
    );
}

export default Main;