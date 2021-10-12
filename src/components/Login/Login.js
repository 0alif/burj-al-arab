import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login">
            <h2>Please Login</h2>
            <input type="email" name="" placeholder="Email" />
            <br />
            <input type="password" name="" placeholder="Password" />
            <br />
            <br />
            <button onClick={handleGoogleLogin}>Google Sign In</button>
            <button onClick={signInUsingFacebook}>Facebook Sign In</button>
            <button onClick={signInUsingGithub}>Github Sign In</button>
        </div>
    );
};

export default Login;