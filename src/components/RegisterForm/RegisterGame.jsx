import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterGame = () => {


    return (
        <>
            <label htmlFor="game">
                Game:
                <input
                    type="text"
                    name="game"
                    // value={username}
                    required
                    // onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <button>Add Game</button>
        </>
    )
}
export default RegisterGame