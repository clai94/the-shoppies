import { Movie } from '../models/Movie';

type SelectedMovieProps = {
    movie: Movie;
};

const SelectedMovie = ({ movie }: SelectedMovieProps) => {
    return (
        <div className='flex flex-col'>
            <img src={movie.Poster} alt={movie.Title} />
            {movie.Title}
        </div>
    );
};

export default SelectedMovie;
