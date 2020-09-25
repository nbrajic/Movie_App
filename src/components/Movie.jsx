import React  from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Movie = ({movies,setMovie,GenreMatch,setDisplay}) => {

    return (
        <Row style={{marginBottom:"2%"}}>
          {movies.map(movie =>
            <Col 
              key={movie.id} 
              style={{padding: "0"}}
            >
              <Flippy>
                <FrontSide title="Click for more!">
                  <img 
                  src={movie.poster_path ? 
                    `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` 
                  : 
                    'https://www.linkpicture.com/q/NoPosterAvailable.png'} 
                  alt={movie.name} 
                  style={{width: "100%", color:"white"}}/>
                </FrontSide>
                <BackSide title={movie.title} style={{display: "flex", justifyContent: "center"}}>
                  <div style={{color:"white", fontFamily:"fantasy", padding: "5%"}}>
                    <h3>{movie.title.length < 15 ? movie.title : movie.title.slice(0,15) + '...'}</h3>
                    <p>{GenreMatch(movie).length <= 3 ? 
                          GenreMatch(movie).join(', \n') 
                        : 
                          GenreMatch(movie).slice(0,3).join(', \n')}
                    </p>
                    <p>Release date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <Link 
                      to={`/movies/${movie.id}`}  
                      style={{position:"absolute", bottom: "10%"}}
                      onClick={() => {
                        setMovie(movie)
                        setDisplay(false)
                    }}>See More</Link>
                  </div>
                </BackSide>
              </Flippy>
            </Col>
          )}
        </Row>
    )

};

export default Movie;