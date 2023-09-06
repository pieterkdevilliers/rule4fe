import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',  // Use 'password1' field name
        password2: '',  // Use 'password2' field name
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegistration = () => {
        fetch('/snapshots/api/v1/user-register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Registration failed');
        })
        .then((data) => {
            // Handle success, e.g., redirect to login page
            // Redirect to the login page after successful registration
            navigate('/login'); // Use history.push to navigate to the login page
        })
        .catch((error) => {
            console.error(error.message);
            // Handle error, e.g., display error messages
        });
    };

    return (
        <div>
            <h2>Registration</h2>
            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password1"  // Use 'password1' field name
                placeholder="Password"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password2"  // Use 'password2' field name
                placeholder="Confirm Password"
                onChange={handleChange}
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
