import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory('/profile');

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => history.push('/search')}>
                Search Players
            </button>
            <button onClick={() => history.push('/profile')}>
                View Profile
            </button>
        </>
    )

}


export default HomePage;