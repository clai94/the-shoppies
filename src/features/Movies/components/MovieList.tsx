import { Movie } from '../models/Movie';
import MovieListItem from './MovieListItem';

type MovieListProps = {
    movies: Movie[];
    selectMovie: (imdbID: string) => void;
};

const MovieList = (props: MovieListProps) => {
    return (
        <div className='flex flex-col h-100 pb-10'>
            {props.movies.map((movie) => (
                <MovieListItem
                    key={movie.imdbID}
                    selectMovieId={props.selectMovie}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MovieList;
