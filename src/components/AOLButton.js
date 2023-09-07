import React from 'react';
import { useNavigate } from 'react-router-dom';

const AOLButton = () => {
    const navigate = useNavigate();
    const handleAOLButton = () => {
        navigate('/aols');
    };

    return (
        <div>
            <button class="btn btn-outline-secondary" onClick={handleAOLButton}>View AOLs</button>
        </div>
    );
};

export default AOLButton;

