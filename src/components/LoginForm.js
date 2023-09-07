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
        fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                // Step 2: Token Request
                return fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/token/', {
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
    
            // Handle success, e.g., redirect to user dashboard
            navigate('/aols');
        })
        .catch((error) => {
            console.error(error.message);
            // Handle error, e.g., display error messages
        });
    };

    return (
        <div class="row gy-2 gx-3 align-items-center">
        <div class="m-3">
            <div class="col-auto mb-3">
            <h2>Login</h2>
            </div>
            <div class="col-sm-3 mb-3">
            <input
                class="form-control"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />
            </div>
            <div class="col-sm-3 mb-3">
            <input
                class="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            </div>
            <div class="col-auto mb-3">
            <button class="btn btn-outline-success" onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
    );
};

export default Login;
