import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
                );
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        const fetchRecommendations = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
                );
                setRecommendations(response.data.results);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

        fetchMovieDetails();
        fetchRecommendations();
    }, [id]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg mx-auto mb-4"
                />
            </div>
            <p className="mb-4">
                <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="mb-4">
                <strong>Overview:</strong> {movie.overview}
            </p>
            <p className="mb-4">
                <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
            <h2 className="text-2xl font-bold mt-8">Recommended Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {recommendations.map((rec) => (
                    <Link
                        to={`/movie/${rec.id}`}
                        key={rec.id}
                        className="hover:scale-105 transition-transform"
                    >
                        <div className="text-center">
                            <img
                                src={rec.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${rec.poster_path}`
                                    : "https://via.placeholder.com/500x750?text=No+Image"}
                                alt={rec.title}
                                className="rounded-lg shadow-lg"
                            />
                            <h3 className="mt-2 text-lg font-semibold">{rec.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieDetails;
