import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TVShow = ({shows,setShow,GenreMatch,setDisplay}) => {

    return (
        <Row style={{marginBottom:"2%"}}>
          {shows.map(show =>
            <Col 
              key={show.id} 
              style={{padding: "0"}}
              >
              <Flippy>
                <FrontSide title="Click for more!">
                  <img 
                  src={show.poster_path ? 
                    `https://image.tmdb.org/t/p/w600_and_h900_bestv2${show.poster_path}` 
                  : 
                    'https://www.linkpicture.com/q/NoPosterAvailable.png'} 
                  alt={show.name} 
                  style={{width: "100%", color:"white"}}/>
                </FrontSide>
                <BackSide title={show.name} style={{display: "flex", justifyContent: "center"}}>
                  <div style={{color:"white", fontFamily:"fantasy", padding: "5%"}}>
                    <h3>{show.name.length < 15 ? show.name : show.name.slice(0,15) + '...'}</h3>
                    <p>{GenreMatch(show).length <= 3 ? 
                          GenreMatch(show).join(', \n') 
                        : 
                          GenreMatch(show).slice(0,3).join(', \n')}
                    </p>
                    <p>Release date: {show.first_air_date}</p>
                    <p>Rating: {show.vote_average}</p>
                    <Link 
                      to={`/tv/${show.id}`} 
                      style={{position:"absolute", bottom: "10%"}}
                      onClick={() => {
                        setShow(show)
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

export default TVShow;