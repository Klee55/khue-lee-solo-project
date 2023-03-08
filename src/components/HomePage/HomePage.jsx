import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory('/profile');

    const viewProfilePage = () => {
       
        history.push('/profile');
    }

    return (
        <>
            <h1>Home Page</h1>
            <button>
                Search Players
            </button>
            <button onClick={viewProfilePage}>
                View Profile
            </button>
        </>
    )

}


export default HomePage;