import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { getMovieGenres, getShowGenres } from '../services';
//import {isLoggedIn} from '../LocalStorage';


import Movies from './Movies';
import TVShows from './TVShows';
import InfoMovie from './InfoMovie';
import InfoShow from './InfoShow';
import Login from './Login';

const ReactRouter = ({movies,tvShows,setDisplay,loggedIn,setLoggedIn}) => {

    const [movie, setMovie] = useState('');
    const [show, setShow] = useState('');
    const [movieGenres, setMovieGenres] = useState([]);
    const [showGenres, setShowGenres] = useState([]);
    

    useEffect(() => {
        
        getMovieGenres().then(
          res => setMovieGenres(res.data.genres)  
        )
  
        getShowGenres().then(
          res => setShowGenres(res.data.genres)
        )

    },[])

    const GenreMatchMovie = (movie) => {
        return movie.genre_ids.map
          (el => movieGenres[movieGenres
            .findIndex(genre => el === genre.id)].name)
      };
    
      const GenreMatchShow = (show) => {
        return show.genre_ids.map
          (el => showGenres[showGenres
            .findIndex(genre => el === genre.id)] !== undefined ? showGenres[showGenres
              .findIndex(genre => el === genre.id)].name : '')
      };

    return (
        <Router>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      
      <Switch>
      <Route exact path="/movies/:id">
        {movie ? 
        <InfoMovie movie={movie} setMovie={setMovie} GenreMatch={GenreMatchMovie} loggedIn={loggedIn}/> 
        :
        <Redirect to="/movies" />}
        </Route>
        <Route exact path ={`/tv/:id`}>
        {show ?
          <InfoShow show={show} GenreMatch={GenreMatchShow} setShow={setShow} loggedIn={loggedIn}/>
        :
        <Redirect to="/tv"/>}
        </Route>
        <Route exact path="/movies"> 
          <Movies 
            movies={movies} 
            movieGenres={movieGenres} 
            setMovie={setMovie} 
            GenreMatch={GenreMatchMovie} 
            setDisplay={setDisplay}/>
        </Route>
        <Route exact path="/tv">
          <TVShows 
          tvShows={tvShows} 
          showGenres={showGenres}
          setShow={setShow} 
          GenreMatch={GenreMatchShow} 
          setDisplay={setDisplay}/>
        </Route>
        <Route path="/login">
          {loggedIn ? <Redirect to="/movies"/> : <Login setDisplay={setDisplay} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
        </Route>
        <Route path="/"> 
          <Movies 
            movies={movies} 
            movieGenres={movieGenres} 
            setMovie={setMovie} 
            GenreMatch={GenreMatchMovie} 
            setDisplay={setDisplay}/>
        </Route>
      </Switch>
    </Router>
    )
};

export default ReactRouter;