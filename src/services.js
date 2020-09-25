import axios from 'axios';

export const getTVShows = (page) => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=91fd2a78938085c00dfa0b17a383907e&page=${page}`)
};

export const getMovies = (page) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=91fd2a78938085c00dfa0b17a383907e&page=${page}`)
};

export const getMovieGenres = () => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=91fd2a78938085c00dfa0b17a383907e')
};

export const getShowGenres = () => {
    return axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=91fd2a78938085c00dfa0b17a383907e')
};

export const searchMovies = (title,page) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=91fd2a78938085c00dfa0b17a383907e&query=${title}&page=${page}`)
};

export const searchShows = (title,page) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=91fd2a78938085c00dfa0b17a383907e&query=${title}&page=${page}`)
};

export const getMovieImages = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=91fd2a78938085c00dfa0b17a383907e`)
};

export const getMovieRecommendations = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=91fd2a78938085c00dfa0b17a383907e`)
};

export const getShowInfo = (id) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=91fd2a78938085c00dfa0b17a383907e`)
};

