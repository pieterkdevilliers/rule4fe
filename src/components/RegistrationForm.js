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
        fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/user-register/', {
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
        <div class="row gy-2 gx-3 align-items-center">
            <div class="m-3">
                <div class="col-auto mb-3">
                    <h2>Registration</h2>
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
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div class="col-sm-3 mb-3">
                    <input
                        class="form-control"
                        type="password"
                        name="password1"  // Use 'password1' field name
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <div class="col-sm-3 mb-3">
                    <input
                        class="form-control"
                        type="password"
                        name="password2"  // Use 'password2' field name
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button class="btn btn-outline-success" onClick={handleRegistration}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
