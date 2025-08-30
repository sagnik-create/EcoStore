import React, { useState } from 'react';
import './SignupSigninPage.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Add your sign-in logic here (e.g., API call)
        // Example:
        // const response = await fetch('/api/signin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password }),
        // });

        // if (!response.ok) {
        //     const data = await response.json();
        //     setError(data.message);
        // } else {
        //     // Handle successful sign-in
        // }
    };

    return (
        <div className="auth-container">
            <h2 className="hero-headline">Sign In</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="get-started-button">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;