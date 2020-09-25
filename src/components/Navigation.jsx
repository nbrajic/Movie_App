import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import {searchMovies, searchShows} from '../services';
import {clearStorage} from '../LocalStorage';

const Navigation = ({setMovies, setTVShows, filter, setFilter, setPage, setDisplay, setNumOfPages, loggedIn, setLoggedIn}) => {


    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/tv">TV Shows</Nav.Link>
                {!loggedIn ? 
                    <Nav.Link href="/login">Login</Nav.Link> 
                : 
                    <Nav.Link href="/login" onClick={ () =>
                        {clearStorage()
                        setLoggedIn(false)}}>Logout</Nav.Link>}
            </Nav>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" 
                    onChange={(e) => setFilter(e.target.value)}/>
                <Button  
                    variant="outline-danger" 
                    onClick={() => {
                        if (filter.trim() !== '' )
                        {searchMovies(filter,1).then(res => {
                            if (res.data.total_results > 0) {
                            setMovies(res.data.result)
                            setNumOfPages(res.data.total_pages)
                            res.data.total_pages > 1 ? setDisplay(true) : setDisplay(false)}})
                        searchShows(filter,1).then(res => {
                            if (res.data.total_results > 0) {
                            setTVShows(res.data.results)
                            setNumOfPages(res.data.total_pages)
                            res.data.total_pages > 1 ? setDisplay(true) : setDisplay(false)}})
                        setPage(1)}
                    }}
                >Search</Button>
            </Form>
         </Navbar>
    )
};

export default Navigation;