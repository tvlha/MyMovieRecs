import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "./services/tmdb";
import Search from "./Search";
import { FavoritesContext } from "./FavoritesContext";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getTrendingMovies();
            setMovies(data.filter((movie) => movie.poster_path)); // Filter out movies without posters
        };

        fetchMovies();
    }, []);

    const handleSearchResults = (results) => {
        setMovies(results.filter((movie) => movie.poster_path)); // Filter out movies without posters
    };

    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const isFavorite = (movie) => favorites.some((fav) => fav.id === movie.id);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Movie Dashboard</h1>

            {/* Favorites Link */}
            <div className="text-center mb-8">
                <Link to="/favorites" className="text-lg text-green-500 hover:underline">
                    View Favorites
                </Link>
            </div>

            {/* Search Component */}
            <Search onResults={handleSearchResults} />

            {/* Movie Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="hover:scale-105 transition-transform">
                        <div className="text-center">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-lg shadow-lg"
                            />
                            <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
                            {isFavorite(movie) ? (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeFavorite(movie.id);
                                    }}
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Remove Favorite
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addFavorite(movie);
                                    }}
                                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Add to Favorites
                                </button>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
