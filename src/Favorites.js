import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { getRecommendations } from "./openai";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);
    const [aiRecommendations, setAiRecommendations] = useState([]);

    useEffect(() => {
        const fetchAiRecommendations = async () => {
            if (favorites.length > 0) {
                const recommendations = await getRecommendations(favorites);
                setAiRecommendations(recommendations);
            }
        };

        fetchAiRecommendations();
    }, [favorites]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Your Favorites</h1>
            {favorites.length === 0 ? (
                <p className="text-center">No favorites added yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {favorites.map((movie) => (
                        <div key={movie.id} className="text-center">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded-lg shadow-lg"
                                />
                            </Link>
                            <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
                            <button
                                onClick={() => removeFavorite(movie.id)}
                                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove Favorite
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <h2 className="text-2xl font-bold mt-8">AI-Recommended Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {aiRecommendations.map((rec, index) => (
                    <div key={index} className="text-center">
                        <h3 className="mt-2 text-lg font-semibold">{rec.title}</h3>
                        <p className="text-sm">{rec.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
