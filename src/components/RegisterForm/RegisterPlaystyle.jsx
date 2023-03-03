import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [playstyle, setPlaystyle] = useState('')
    const dispatch = useDispatch();
    const addedPlaystyle = useSelector(store => store.playstyleReducer);

    // send playstyle input to playstyleReducer and clear input
    const addPlaystyle = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_PLAYSTYLE',
            payload: playstyle
        });
        setPlaystyle('');
    };

    // remove selected playstyle when remove button is clicked
    const removePlaystyle = (addedPlaystyle) => {
        dispatch({
            type: 'REMOVE_PLAYSTYLE',
            payload: addedPlaystyle
        });
    };

    return (
        <>
            <label htmlFor="playstyle">
                Playstyle:
                <input
                    type="text"
                    name="playstyle"
                    value={playstyle}
                    // required
                    onChange={(event) => setPlaystyle(event.target.value)}
                />
            </label>
            <button onClick={addPlaystyle}>
                Add
            </button>
            <ul>
                {addedPlaystyle.map((addedPlaystyle) => (
                    <li key={addedPlaystyle}>
                        {addedPlaystyle}
                        <button onClick={() => removePlaystyle(addedPlaystyle)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default RegisterGame