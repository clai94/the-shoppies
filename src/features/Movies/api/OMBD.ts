import axios, { AxiosResponse } from 'axios';

import { Movie } from '../models/Movie';
import { SearchOmdbResponse } from './models/SearchOmdbResponse';

const API_KEY = '';

export const searchMovies = async (searchQuery: string): Promise<Movie[]> => {
    const response: AxiosResponse<SearchOmdbResponse> = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}&type=movie`,
    );

    return response.data.Search;
};

export const fetchMovie = async (imdbID: string): Promise<Movie> => {
    const response: AxiosResponse<Movie> = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`,
    );

    return response.data;
};
