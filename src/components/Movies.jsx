import React from 'react';
import { Container } from 'react-bootstrap';
import Movie from './Movie';

const Movies = ({movies,setMovie,movieGenres,GenreMatch,setDisplay}) => {
    return (
        <Container style={{marginTop:"5%"}}> 
          <Movie 
            movies={movies.slice(0,5)} 
            movieGenres={movieGenres} 
            setMovie={setMovie}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <Movie 
            movies={movies.slice(5,10)} 
            movieGenres={movieGenres} 
            setMovie={setMovie}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <Movie 
            movies={movies.slice(10,15)} 
            movieGenres={movieGenres} 
            setMovie={setMovie}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <Movie 
            movies={movies.slice(15,20)} 
            movieGenres={movieGenres} 
            setMovie={setMovie}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
        </Container>
    )
};

export default Movies;