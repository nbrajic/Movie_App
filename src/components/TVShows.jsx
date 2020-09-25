import React from 'react';
import { Container } from 'react-bootstrap';
import TVShow from './TVShow';


const TVShows = ({tvShows,showGenres,setShow,GenreMatch,setDisplay}) => {
    return (
        <Container style={{marginTop:"5%"}}> 
          <TVShow 
            shows={tvShows.slice(0,5)} 
            showGenres={showGenres}
            setShow={setShow}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <TVShow 
            shows={tvShows.slice(5,10)} 
            showGenres={showGenres}
            setShow={setShow}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <TVShow 
            shows={tvShows.slice(10,15)} 
            showGenres={showGenres}
            setShow={setShow}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
          <TVShow 
            shows={tvShows.slice(15,20)} 
            showGenres={showGenres}
            setShow={setShow}  
            GenreMatch={GenreMatch} 
            setDisplay={setDisplay}
          />
        </Container>
    )
};

export default TVShows;