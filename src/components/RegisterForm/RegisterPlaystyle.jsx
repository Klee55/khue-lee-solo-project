import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [playstyle, setPlaystyle] = useState('')
    const dispatch = useDispatch();
    const addedPlaystyle = useSelector(store => store.playstyleReducer);
    const playstyles = useSelector(store => store.fetchPlaystylesReducer);

    console.log(playstyles);

    // fetch playstyles
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYSTYLES' });
      }, []);

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
                <select 
                // placeholder
                type="text"
                value={playstyle} 
                onChange={(event) => setPlaystyle(event.target.value)}>
                    {playstyles.map((playstyle) => (
                        <option key={playstyle.id}>
                            {playstyle.style}
                        </option>
                    ))}
                </select>
                <button onClick={addPlaystyle}>Add Playstyle</button>
            </label>
            <ul>
                {addedPlaystyle.map((addedPlaystyle) => (
                    <li key={addedPlaystyle}>
                        {addedPlaystyle} <button onClick={() => removePlaystyle(addedPlaystyle)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default RegisterGame