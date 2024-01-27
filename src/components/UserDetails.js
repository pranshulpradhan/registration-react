import React, { useState } from 'react';
import { useAuth } from '../firebase'; // Importing useAuth from firebase
import { useNavigate } from 'react-router-dom';
import './UserDetails.css';
import Footer from './Footer';

const UserDetails = () => {
  const { auth } = useAuth(); // Destructuring auth from useAuth
  const currentUser = auth.currentUser; // Accessing the currentUser object
  const navigate = useNavigate(); // Importing useNavigate for programmatic navigation

  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to manage logout popup visibility

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Calling signOut function to log out the user
      setShowLogoutPopup(true); // Display logout popup
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleOk = () => {
    setShowLogoutPopup(false); // Close logout popup
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className='container-user'>
      <h2>User Details</h2>
      {currentUser && (
        <>
          <p>Hello {currentUser.email}</p> {/* Displaying the user's email address if currentUser exists */}
          <button onClick={handleLogout}>Logout</button> {/* Logout button */}
        </>
      )}
      <Footer />
      {/* Logout popup */}
      {showLogoutPopup && (
        <div className="logout-popup">
          <p>Hey {currentUser?.email ?? 'user'}, you are successfully logged out</p>
          <button onClick={handleOk}>OK</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
