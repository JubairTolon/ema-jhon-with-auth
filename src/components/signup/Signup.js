import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css'
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('password did not match');
            return;
        };
        if (password.length < 6) {
            setError('password must be 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onBlur={handleEmailBlur} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onBlur={handlePasswordBlur} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Confirm-Password">Confirm Password</label>
                        <input type="password" name='Confirm-password' onBlur={handleConfirmPasswordBlur} required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value='SignUp' />
                </form>
                <p>
                    Already have an account?  <Link className='from-link' to='/login'>Login</Link>
                </p>
                <div className="lines">
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <button className='google-sign'>
                    <img style={{ width: '25px' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Signup;