import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {

    const [playstyle, setPlaystyle] = useState('');
    const [playstyleId, setPlaystyleId] = useState('');
    const dispatch = useDispatch();
    const addedPlaystyle = useSelector(store => store.playstyleReducer);
    const playstyles = useSelector(store => store.fetchPlaystylesReducer);
    const user = useSelector(store => store.user);


    // fetch playstyles
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYSTYLES' });
    }, []);

    // set playstyle and playStyleId on change
    const setPlaystyleState = (event) => {
        let playstyle = event.target.value;
        let selectedPlaystyleArray = playstyles.filter(item => item.style === playstyle);
        // Filter returns a list but should only have one match
        let selectedPlaystyle = selectedPlaystyleArray[0];

        setPlaystyle(event.target.value);
        setPlaystyleId(selectedPlaystyle.id);

    }

    // send playstyle input to playstyleReducer and clear input
    const addPlaystyle = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PLAYSTYLE',
            payload: {
                playstyle: playstyle,
                user_id: user.id,
                playstyle_id: playstyleId 
            }
        });
    };

    // remove selected playstyle when remove button is clicked
    const removePlaystyle = (addedPlaystyle) => {
        dispatch({
            type: 'REMOVE_PLAYSTYLE',
            payload: addedPlaystyle
        });
    };

    return (
        <div>
            <label htmlFor="playstyle">
                Playstyle:
                <select
                    // placeholder
                    type="text"
                    value={playstyle}
                    onChange={(event) => setPlaystyleState(event)}>
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
                    <li key={addedPlaystyle.playstyle}>
                        {addedPlaystyle.playstyle} <button onClick={() => removePlaystyle(addedPlaystyle)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RegisterGame