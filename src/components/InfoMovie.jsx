import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { getMovieImages, getMovieRecommendations } from '../services';
import ReactStars from "react-rating-stars-component";
//import {isLoggedIn} from "../LocalStorage";

const InfoMovie = ({GenreMatch,movie,setMovie,loggedIn}) => {

  const [images,setImages] = useState([]);
  const [recommendations,setRecommendations] = useState([]);

  const history = useHistory();
  // eslint-disable-next-line
  var { id } = useParams();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
      
      getMovieImages(movie.id).then(
          res => setImages(res.data.backdrops)
      )

      getMovieRecommendations(movie.id).then(
        res => setRecommendations(res.data.results)
      )

  },[movie.id])
  console.log(window.location.href);
    return (
      
      <Container style={{color:"white", padding: "2%"}}>
      <Row>
        <Col>
          <h1>{movie.title}</h1>
          <p>{GenreMatch(movie).slice(0,3).join(', \n')}</p>
          <p>{movie.overview}</p>
        </Col>
      </Row>
      <Row>
          <Col>
              <img 
                  src={movie.poster_path ? 
                      `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` 
                  : 
                      'https://www.linkpicture.com/q/NoPosterAvailable.png'} 
                  alt={movie.title} 
                  style={{width: "100%", color:"white"}}
              />
          </Col>
          <Col style={{width:"100%"}}>
              <h3 style={{
                  display:"flex", justifyContent:"center", paddingTop: "0"
                }}>Ratings:</h3>
                <div style={{
                  display:"flex", justifyContent:"center", paddingBottom: "2%"
                }}>
                  <ReactStars
                    count={10}
                    value={movie.vote_average}
                    onChange={ratingChanged}
                    size={36}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={loggedIn ? true : false} //login
                  />
                </div>
              <Carousel>
                {images.map(image => 
                  <Carousel.Item key={image.file_path}>
                      <img
                      className="d-block w-100"
                      src={`https://image.tmdb.org/t/p/original/${image.file_path}?bg=000000`}
                      alt="Movie backdrops"
                      />
                  </Carousel.Item>
                )}
              </Carousel>
              <h3 style={{paddingTop: "5%", display:"flex", justifyContent:"center"}}>More Like This:</h3>
              <Carousel style={{paddingTop: "5%"}}>
                {recommendations.map(movie => 
                    <Carousel.Item key={movie.id}>
                        <img
                        className="d-block w-100"
                        onClick={() => {
                          history.push(`/movies/${movie.id}`)
                          setMovie(movie)
                        }}
                        src={movie.backdrop_path ?
                            `https://image.tmdb.org/t/p/original/${movie.backdrop_path}?bg=000000`
                            : movie.poster_path ?
                            `https://image.tmdb.org/t/p/w250_and_h141_face${movie.poster_path}?bg=000000`
                            :
                            'https://www.linkpicture.com/q/NoPoster2.png'
                            }
                        alt={movie.title}
                        title={movie.title}
                        />
                        <Carousel.Caption>
                            <h4 
                            style={{
                              color: "white",
                              textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}
                            >{movie.title}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
              </Carousel>
          </Col>
      </Row>
      </Container>
    )
};

export default InfoMovie;