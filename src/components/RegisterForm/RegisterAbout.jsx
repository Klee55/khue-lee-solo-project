import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterAbout = () => {


    return (
        <>
            <label htmlFor="game">
                About:
                <input
                    type="text"
                    name="game"
                    // value={username}
                    required
                    // onChange={(event) => setUsername(event.target.value)}
                />
            </label>
        </>
    )
}
export default RegisterAbout