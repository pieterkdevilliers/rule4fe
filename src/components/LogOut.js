import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        fetch('/snapshots/api/v1/logout/', {
            method: 'POST',
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Logout failed');
        })
        .then((data) => {
            console.log(data.message);
            // Handle success, e.g., redirect to the homepage
        })
        .catch((error) => {
            console.error(error.message);
            // Handle error, e.g., display error messages
        });
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
