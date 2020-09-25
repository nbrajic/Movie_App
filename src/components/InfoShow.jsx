import React, { useEffect, useState } from 'react';
//import { useHistory, useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { getShowInfo } from '../services';
import ReactStars from "react-rating-stars-component";

const InfoShow = ({show, setShow, GenreMatch,loggedIn}) => {

  const [seasons,setSeasons] = useState();
 
  // const history = useHistory();
  // // eslint-disable-next-line
  // var { id } = useParams();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {

    getShowInfo(show.id).then(
        res => {setSeasons(res.data.seasons)
        console.log(res.data.seasons)}
    )

  },[show.id])

  

    return (
        <Container style={{color:"white", padding: "4%"}}>
        <Row>
            <Col>
            <h1>{show.name}</h1>
            <p>{GenreMatch(show).slice(0,3).join(', \n')}</p>
            <p>{show.overview}</p>
            </Col>
        </Row>
        <Row>
          <Col>
              <img 
                  src={show.poster_path ? 
                      `https://image.tmdb.org/t/p/w600_and_h900_bestv2${show.poster_path}` 
                  : 
                      'https://www.linkpicture.com/q/NoPosterAvailable.png'} 
                  alt={show.name} 
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
                    value={show.vote_average}
                    onChange={ratingChanged}
                    size={36}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={loggedIn ? true : false} //login
                  />
                </div>
              <h3 style={{display:"flex", justifyContent:"center"}}>Seasons:</h3>
              <Carousel style={{paddingTop: "5%", width:"80%", marginLeft: "12%"}} >
                {seasons ? 
                seasons.map(season => 
                    <Carousel.Item key={season.name}>
                        <img
                        className="d-block w-100"
                        // onClick={() => {
                        //   setShow(show)
                        //   history.push(`/info/${season.name}`)
                        //   RedirectFunction()
                        // }}
                        src={season.poster_path ?
                            `https://image.tmdb.org/t/p/original/${season.poster_path}?bg=000000`
                            :
                            'https://www.linkpicture.com/q/NoPoster2.png'
                            }
                        alt={season.name}
                        title={season.name}
                        />
                        <Carousel.Caption>
                            <h4 
                            style={{
                              color: "white",
                              textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}
                            >{season.name}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            :
            null}
              </Carousel>
          </Col>
      </Row>
        </Container>
    )
};

export default InfoShow;