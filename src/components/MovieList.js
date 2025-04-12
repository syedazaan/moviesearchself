import React from 'react';

function MovieList({ movies, onSelectMovie }) {
    return (
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">{movie.Year}</p>
                            <button
                                className="btn btn-info"
                                onClick={() => onSelectMovie(movie)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
