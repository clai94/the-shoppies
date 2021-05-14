import { Movie } from '../models/Movie';

type MovieListItemProp = {
    movie: Movie;
    selectMovieId: (imdbID: string) => void;
};

const MovieListItem = ({ movie, selectMovieId }: MovieListItemProp) => {
    return (
        <div
            className='shadow-xl rounded flex m-5 border rounded'
            onClick={() => {
                selectMovieId(movie.imdbID);
            }}
        >
            <div className='flex-col flex'>
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Ratings}</p>
            </div>
            <div className='flex-col flex w-full h-full p-3 '>
                <div className='flex justify-between'>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </div>
                <p>{movie.Type}</p>
                <button className='self-end'>Nominate</button>
            </div>
        </div>
    );
};

export default MovieListItem;
