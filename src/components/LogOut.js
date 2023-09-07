import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/snapshots/login');
    };

    return (
        <div>
            <button class="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
