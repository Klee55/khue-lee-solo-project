import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const EditUserAbout = () => {
   
    const user = useSelector(store => store.user);

    return (
        <>
            <h1> User Avatar goes here</h1>
            <p>${user.about}</p>
        </>
    )

   
}

export default EditUserAbout;