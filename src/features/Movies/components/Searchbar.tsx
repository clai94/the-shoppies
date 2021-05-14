import { useEffect, useState } from 'react';

type SearchbarProps = {
    onSubmit: (searchQuery: string) => void;
};

const Searchbar = (props: SearchbarProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const inputTimer = setTimeout(
            () => props.onSubmit(searchQuery),
            500,
        );

        return () => clearTimeout(inputTimer);
    }, [props, searchQuery]);

    return (
        <input
            placeholder='Search movies'
            className='shadow rounded h-10 w-full px-4'
            type='text'
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
    );
};

export default Searchbar;
