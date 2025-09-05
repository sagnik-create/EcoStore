import React, { useState } from 'react';
import './SignupSigninPage.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
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
        <div className="signup-signin-bg">
            <div className="signup-signin-card">
                <div className="signup-signin-title">Sign In</div>
                {error && <div className="signup-signin-error">{error}</div>}
                <form className="signup-signin-form" onSubmit={handleSubmit}>
                    <div className="signup-signin-input-group">
                        <label className="signup-signin-label" htmlFor="email">Email</label>
                        <input
                            className="signup-signin-input"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-signin-input-group">
                        <label className="signup-signin-label" htmlFor="password">Password</label>
                        <input
                            className="signup-signin-input"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-signin-remember">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={remember}
                            onChange={e => setRemember(e.target.checked)}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button className="signup-signin-button" type="submit">LOGIN</button>
                </form>
                <div className="signup-signin-or">Or login with</div>
                <div className="signup-signin-socials">
                    <button className="signup-signin-social-btn" type="button">
                        {/* You can use an icon here */}
                        Facebook
                    </button>
                    <button className="signup-signin-social-btn" type="button">
                        {/* You can use an icon here */}
                        Google
                    </button>
                </div>
                <div className="signup-signin-switch-link">
                    Not a member? <a href="/signup">Sign up now</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;