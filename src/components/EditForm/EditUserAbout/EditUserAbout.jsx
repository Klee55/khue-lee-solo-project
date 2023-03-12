import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


const EditUserAbout = () => {

    const [about, setAbout] = useState('');
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const userAbout = useSelector((store) => store.userAboutReducer);

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_USER_ABOUT',
            payload: event.target.value
        })
    }

    const saveAbout = () => {
        console.log('saveAbout button clicked:', userAbout);
        dispatch({
            type: 'SAVE_USER_ABOUT',
            payload: userAbout
        });
    }

    return (
        <>
            <h1> User Avatar goes here</h1>
            <textarea
                value={userAbout}
                style={{width: '70%'}}
                onChange={(event) => handleChange(event)}>
            </textarea>
            <br/>
            <button onClick={() => saveAbout()}>
                Save
            </button>
        </>
    )


}

export default EditUserAbout;