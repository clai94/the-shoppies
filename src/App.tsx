import './App.css';

import React from 'react';

import Movies from './features/Movies/containers/Movies';

function App() {
    return (
        <div className='w-screen flex items-center justify-center h-screen bg-yellow-100'>
            <Movies></Movies>
        </div>
    );
}

export default App;
