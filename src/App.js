import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'; 
import MovieList from './components/MovieList'; 
import MovieDetailsModal from './components/MovieDetailsModal';
import './App.css';

const API_KEY = '65963097'; // Your OMDb API key

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Fetch popular movies initially
    useEffect(() => {
        fetchMovies('batman'); // Default search term (e.g., 'batman')
    }, []); // Runs only once when the component mounts

    const fetchMovies = async (query) => {
        try {
            // API request to fetch movies based on the search term
            const response = await axios.get(
                `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
            );
            
            // Check if 'Search' data is present in the response
            if (response.data.Search) {
                setMovies(response.data.Search); // Update the movies state with the search results
            } else {
                setMovies([]); // No movies found, clear the list
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div className="App">
            {/* Landing Page Section */}
            <section className="hero bg-dark text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Movie Search</h1>
                    <p className="lead">Find and explore your favorite movies easily.</p>
                    {/* Search Bar for searching movies */}
                    <SearchBar onSearch={(term) => fetchMovies(term)} />
                </div>
            </section>

            {/* Movie List Section */}
            <section className="movie-list py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Popular Movies</h2>
                    <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
                </div>
            </section>

            {/* Movie Details Modal */}
            {selectedMovie && (
                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}

            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <div className="container">
                    <p className="mb-0">&copy; {new Date().getFullYear()} FLUID AI. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
