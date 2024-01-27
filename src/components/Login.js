import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Importing auth from firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importing signInWithEmailAndPassword function
import './Login.css';
import Footer from './Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Importing useNavigate for programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Using signInWithEmailAndPassword function
      // User successfully logged in
      console.log('User logged in:', userCredential.user);
      window.alert('You are successfully Logged In');
      navigate('/userdetails'); // Display success popup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container-login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <div>{error}</div>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      <Footer />
    </div>
  );
};

export default LoginPage;
