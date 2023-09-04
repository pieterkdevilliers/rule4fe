// auth.js
export const isAuthenticated = () => {
    // Check if the user is authenticated (e.g., check for a token)
    const token = localStorage.getItem('token'); // Adjust this based on your authentication method
    return !!token; // Return true if the user is authenticated, false otherwise
  };
  