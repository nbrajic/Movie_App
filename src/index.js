import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getMovies, getTVShows, searchMovies, searchShows } from './services';
import ReactRouter from './components/ReactRouter';

import Navigation from './components/Navigation';
import Buttons from './components/Buttons';


document.body.style = 'background: black;';

const App = () => {

  const [movies,setMovies] = useState([]);
  const [tvShows,setTVShows] = useState([]);
  const [filter,setFilter] = useState('');
  const [page,setPage] = useState(1);
  const [display, setDisplay] = useState(true);
  const [numOfPages, setNumOfPages] = useState(500);
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
      if(filter === ''){
        getTVShows(page).then(
          res => {
            setTVShows(res.data.results)
            console.log(res.data)}
        )
        
        getMovies(page).then(
          res => {
            setMovies(res.data.results)
            console.log(res.data)}
        )
      }
      else{
        searchMovies(filter,page).then(res => setMovies(res.data.results))
        searchShows(filter,page).then(res => setTVShows(res.data.results))
      }
         // eslint-disable-next-line   
  },[page])

  return (
    <div>
      <Navigation 
        setTVShows={setTVShows} 
        setMovies={setMovies} 
        filter={filter} 
        setFilter={setFilter}
        setPage={setPage}
        setDisplay={setDisplay}
        setNumOfPages={setNumOfPages}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}/>
    {display ? <Buttons 
        page={page} 
        setPage={setPage}
        numOfPages={numOfPages}/> : null}
      <ReactRouter 
        movies={movies}
        setDisplay={setDisplay}
        tvShows={tvShows}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
