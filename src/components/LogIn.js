import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();
    const handleLogInButton = () => {
        navigate('/snapshots/login');
    };

    return (
        <div>
            <button onClick={handleLogInButton}>Login</button>
        </div>
    );
};

export default LoginButton;
