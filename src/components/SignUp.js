import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Importing auth from firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importing createUserWithEmailAndPassword function
import './SignUp.css';
import Footer from './Footer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Importing useNavigate for programmatic navigation


  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Using createUserWithEmailAndPassword function
      // User successfully signed up
      console.log('User signed up:', userCredential.user);
      window.alert('You are successfully signed up');
      navigate('/login'); // Navigate to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container-form'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        {error && <div>{error}</div>}
        <div>
          <label>Email</label><br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
      <Footer />
    </div>
  );
};

export default SignUp;
