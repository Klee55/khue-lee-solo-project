import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterPlaystyle = () => {


    return (
        <>
            <label htmlFor="game">
                Playstyle:
                <input
                    type="text"
                    name="game"
                    // value={username}
                    required
                    // onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <button>Add</button>
        </>
    )
}
export default RegisterPlaystyle