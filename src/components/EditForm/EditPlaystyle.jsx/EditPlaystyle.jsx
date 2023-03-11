import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditPlaystyle = () => {
    const playstyles = useSelector((store) => store.fetchPlaystylesReducer);
    const user = useSelector(store => store.user);
    const userPlaystyles = useSelector((store) => store.userPlaystylesReducer);
    const [matchedStyleChoice, setMatchedStyleChoice] = useState('')
    const [playstyleId, setPlaystyleId] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const setState = (event) => {
        event.preventDefault();

        let styleChoice = Number(event.target.value);
        let selectedStyleArray = userPlaystyles.filter(item => item.playstyle_id === styleChoice);
        let selectedStyle = selectedStyleArray[0];

        setMatchedStyleChoice(selectedStyle);
        setPlaystyleId(styleChoice);
    }

    // fetch playstyles on load
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYSTYLES' });
        dispatch({
            type: 'FETCH_PROFILE',
            payload: user.id
        });
    }, []);

    // add to user's playstyles
    const addPlaystyle = (event) => {
        event.preventDefault();

        if (typeof matchedStyleChoice !== 'undefined') {
            return alert(' selected playstyle already added')
        } else {
            dispatch({
                type: 'ADD_USER_PLAYSTYLE',
                payload: {
                    user_id: user.id,
                    playstyle_id: Number(playstyleId)
                }
            });
            dispatch({
                type: 'FETCH_PROFILE',
                payload: user.id
            });
            history.push('/edit');
        };
    }

    // remove game from list
    const removePlaystyle =(userStyle) => {
        dispatch({
            type: 'REMOVE_USER_PLAYSTYLE',
            payload: userStyle.playstyle_id
        })
    }

    return (
        <>
            <div>
                <label htmlFor="game">
                    Playstyles:
                    <select
                        type="text"
                        onChange={(event) => setState(event)}>
                        {playstyles.map((style) => (
                            <option value={style.id} key={style.id}>
                                {style.style}
                            </option>
                        ))}
                    </select>
                    <button onClick={(event) => addPlaystyle(event)}>
                        Add Playstyle
                    </button>
                </label>
            </div>
            <div>
                <ul>
                    List of Playstyles:
                    {userPlaystyles.map((userStyle) => (
                        <li key={userStyle.style}>
                            {userStyle.style}
                            <button onClick={() => removePlaystyle(userStyle)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EditPlaystyle;