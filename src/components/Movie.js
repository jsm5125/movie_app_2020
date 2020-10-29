import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="movie__genre">{genre}</li>;
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    title: Proptypes.string.isRequired,
    year: Proptypes.number.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};



export default Movie;