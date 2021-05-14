import Searchbar from './Searchbar';

type LandingContentProps = {
    onSearchHandler: (serachQuery: string) => void;
};

const LandingContent = (props: LandingContentProps) => {
    return (
        <div className='flex flex-col w-1/2'>
            <h1 className='text-center py-4'>It's that time of year again!</h1>
            <h1 className='text-center pb-4'>
                We need your help! Nominate your top 5 movies for this year's
                Shoppies awards!
            </h1>
            <Searchbar onSubmit={props.onSearchHandler} />
        </div>
    );
};

export default LandingContent;
