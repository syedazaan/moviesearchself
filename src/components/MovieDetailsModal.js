import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '65963097'; // Your OMDb API key

function MovieDetailsModal({ movie, onClose }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
                );
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [movie]);

    if (!details) return null;

    return (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button className="close" onClick={onClose}>
                        &times;
                    </button>
                    <div className="modal-header">
                        <h5 className="modal-title">{details.Title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{details.Plot}</p>
                        <p><strong>Genre:</strong> {details.Genre}</p>
                        <p><strong>IMDb Rating:</strong> {details.imdbRating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsModal;
