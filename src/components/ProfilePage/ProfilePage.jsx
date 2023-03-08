import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);

    return (
        <>
            <h1>Profile Page</h1>

        </>
    )

}


export default ProfilePage;