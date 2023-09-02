import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegistration = () => {
        fetch('/snapshots/api/v1/register/', {
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
            console.log(data.message);
            // Handle success, e.g., redirect to login page
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
                name="password1"
                placeholder="Password"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                onChange={handleChange}
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
