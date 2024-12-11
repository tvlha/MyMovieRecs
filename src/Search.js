import React, { useState } from "react";
import { searchMovies } from "./services/tmdb";

const Search = ({ onResults }) => {
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === "") return;

        const results = await searchMovies(query);
        onResults(results);
    };

    return (
        <form onSubmit={handleSearch} style={{ marginBottom: "2rem", textAlign: "center" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                style={{
                    padding: "0.5rem",
                    width: "50%",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#333", // Dark background
                    color: "#fff", // Light text
                }}
            />
            <button
                type="submit"
                style={{
                    marginLeft: "0.5rem",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#1db954",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </form>
    );
};

export default Search;
