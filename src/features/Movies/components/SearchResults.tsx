import { useEffect, useState } from 'react';

import { fetchMovie } from '../api/OMBD';
import { Movie } from '../models/Movie';
import MovieList from './MovieList';
import Searchbar from './Searchbar';
import SelectedMovie from './SelectedMovie';

type SearchResultsProps = {
    setSearchQuery: (searchQuery: string) => void;
    movies: Movie[];
};

const SearchResults = ({ movies, setSearchQuery }: SearchResultsProps) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie>();
    const [selectedMovieId, setSelectedMovieId] = useState<string>('');

    const selectedMovieDisplay = selectedMovie ? (
        <SelectedMovie movie={selectedMovie} />
    ) : (
        <div>Pick a movie</div>
    );

    useEffect(() => {
        const fetchSelectedMovie = async (imdbID: string) => {
            const movie = await fetchMovie(imdbID);

            setSelectedMovie(movie);
        };

        if (selectedMovieId) fetchSelectedMovie(selectedMovieId);
    }, [selectedMovieId]);

    return (
        <div className='flex'>
            <div className='flex flex-col h-full overflow-auto pb-10 w-1/2'>
                <div className='m-5'>
                    <Searchbar onSubmit={setSearchQuery} />
                </div>
                <div className='h-full' style={{ maxHeight: '40vh' }}>
                    <MovieList
                        movies={movies}
                        selectMovie={setSelectedMovieId}
                    />
                </div>
            </div>
            <div className='w-1/2'>{selectedMovieDisplay}</div>
        </div>
    );
};

export default SearchResults;
