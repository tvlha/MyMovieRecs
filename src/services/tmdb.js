import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
    baseURL: BASE_URL,
});

export const getTrendingMovies = async () => {
    try {
        const response = await tmdb.get(`/trending/movie/week?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await tmdb.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};

export const getDiscoverMovies = async () => {
    try {
        const response = await tmdb.get(`/discover/movie?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching discover movies:", error);
        return [];
    }
};

