import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = () => {
        // Step 1: Login Request
        fetch('/snapshots/api/v1/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                // Step 2: Token Request
                return fetch('/snapshots/api/v1/token/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData), // Include user credentials again
                });
            }
            throw new Error('Login failed');
        })
        .then((tokenResponse) => {
            if (tokenResponse.ok) {
                return tokenResponse.json();
            }
            throw new Error('Token request failed');
        })
        .then((data) => {
            const token = data.access;
    
            // Store the JWT token in localStorage
            localStorage.setItem('token', token);
            console.log(token);
    
            console.log(data.message);
            // Handle success, e.g., redirect to user dashboard
            navigate('/aols');
        })
        .catch((error) => {
            console.error(error.message);
            // Handle error, e.g., display error messages
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
