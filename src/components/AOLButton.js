import React from 'react';
import { useNavigate } from 'react-router-dom';

const AOLButton = () => {
    const navigate = useNavigate();
    const handleAOLButton = () => {
        navigate('/aols');
    };

    return (
        <div>
            <button onClick={handleAOLButton}>View AOLs</button>
        </div>
    );
};

export default AOLButton;

