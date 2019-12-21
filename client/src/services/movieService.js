import axios from 'axios';

export default {
    getListOfPopularMovies: async () => {
        let response = await axios.get('/api/movies/popular');
        let data = await response.data;

        return data;
    },

    searchForMovie: async movieTitle => {
        let response = await axios.get(`/api/movies/search?movieTitle=${movieTitle}`);
        let data = await response.data;

        return data;
    },

    getMovieById: async movieId => {
        let response = await axios.get(`/api/movies/movie?movieId=${movieId}`);
        let data = await response.data;

        return data;
    },
};
