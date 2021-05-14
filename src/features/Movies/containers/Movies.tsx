import { useEffect, useState } from 'react';

import { searchMovies } from '../api/OMBD';
import LandingContent from '../components/LandingContent';
import SearchResults from '../components/SearchResults';
import { Movie } from '../models/Movie';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [moviesAreLoaded, setMoviesAreLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchSearchResults = async (searchQuery: string) => {
            const movies = await searchMovies(searchQuery);
            setMovies(movies);
            setMoviesAreLoaded(true);
        };

        if (searchQuery) fetchSearchResults(searchQuery);
    }, [searchQuery]);

    const mainContent =
        movies.length && moviesAreLoaded ? (
            <SearchResults movies={movies} setSearchQuery={setSearchQuery} />
        ) : (
            <LandingContent onSearchHandler={setSearchQuery} />
        );

    return (
        <div
            className='flex w-10/12 bg-white shadow rounded-xl p-8 flex-col overflow-auto'
            style={{ maxHeight: '60vh' }}
        >
            <p className='mx-5'>The Shoppies</p>
            {mainContent}
        </div>
    );
};

export default Movies;
