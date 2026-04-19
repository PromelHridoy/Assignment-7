import React, { useState } from 'react';
import { FriendContext } from './FriendContext';



const FriendProvider = ({ children}) => {
    const[contact, setContact] = useState([]);

    const data = {
        contact,
        setContact,
    }


    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;