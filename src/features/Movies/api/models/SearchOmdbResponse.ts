import { Movie } from '../../models/Movie';

export interface SearchOmdbResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
}
