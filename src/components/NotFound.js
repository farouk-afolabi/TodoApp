import React from 'react';
import { Link } from 'react-router-dom'; // To redirect back to the home page
import './NotFound.scss';

function NotFound () {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="todo-button">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;