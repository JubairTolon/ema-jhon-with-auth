import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/shop');
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required onBlur={handleEmailBlur} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required onBlur={handlePasswordBlur} />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input className='form-submit' type="submit" value='Login' />
                </form>
                <p>
                    New to Ema-Jhon? <Link className='from-link' to='/signup'>Create an account</Link>
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

export default Login;