import React, { useReducer, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';
import { reducer, ACTIONS } from './reducer';

const initialState = {
  searchTerm: '',
  movies: [],
  selectedMovie: null,
  initialMovies: []
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchInitialMovies = useCallback(async () => {
    try {
      const responses = await Promise.all([
        axios.get('https://www.omdbapi.com/?t=Inception&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Interstellar&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=The+Matrix&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=The+Dark+Knight&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Avengers+Endgame&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Avatar&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=The+Godfather&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Parasite&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Marvel&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Indiana&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Naruto&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Paranormal&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Thor&apikey=112ae241'),
        axios.get('https://www.omdbapi.com/?t=Scream&apikey=112ae241')
      ]);
      const initialMovies = responses.map(res => res.data);
      dispatch({ type: ACTIONS.SET_MOVIES, payload: initialMovies });
      dispatch({ type: ACTIONS.SET_INITIAL_MOVIES, payload: initialMovies });
    } catch (error) {
      console.error('API Error:', error);
    }
  }, []);

  useEffect(() => {
    fetchInitialMovies();
  }, [fetchInitialMovies]);

  const handleSearch = useCallback(async (term) => {
    if (term) {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=112ae241`);
        if (response.data.Response === 'True') {
          dispatch({ type: ACTIONS.SET_MOVIES, payload: [response.data] });
          dispatch({ type: ACTIONS.SET_SELECTED_MOVIE, payload: null });
        } else {
          console.warn('Movie not found');
        }
      } catch (error) {
        console.error('Search Error:', error);
      }
    }
  }, []);

  const handleSelectMovie = (movie) => {
    dispatch({ type: ACTIONS.SET_SELECTED_MOVIE, payload: movie });
  };

  // const handleClearSearch = () => {
  //   dispatch({ type: ACTIONS.CLEAR_SEARCH });
  // };

  const handleSearchTermChange = (term) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: term });
    if (!term) {
      dispatch({ type: ACTIONS.CLEAR_SEARCH });
    }
  };

  return (
    <>
      <Header title="Movies App" />
      {/* <Search
        searchTerm={state.searchTerm}
        onSearch={handleSearch}
        onSearchTermChange={(term) => dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: term })}
        onClear={handleClearSearch}
      />
      <Movie
        movies={state.movies}
        selectedMovie={state.selectedMovie}
        onMovieClick={handleSelectMovie}
        onClear={() => dispatch({ type: ACTIONS.SET_SELECTED_MOVIE, payload: null })}
      /> */}
      <Search
        searchTerm={state.searchTerm}
        onSearch={handleSearch}
        onSearchTermChange={handleSearchTermChange}
      />
      <Movie
        movies={state.movies}
        selectedMovie={state.selectedMovie}
        onMovieClick={handleSelectMovie}
        onClear={() => dispatch({ type: ACTIONS.SET_SELECTED_MOVIE, payload: null })}
      />
    </>
  );
};

export default App;

