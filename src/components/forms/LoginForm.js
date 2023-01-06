import { useState } from 'react';
import  { useNavigate } from 'react-router-dom'
import bcrypt from "bcryptjs";

export default function LoginForm() {

    // States for registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setLogin] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    // Redirect to the home page once logged in
    const redirectToHome= () => {
        navigate("/");
    };

    // Handling the name change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setLogin(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setLogin(false);
    };

    // Handling the form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError(true);
        } else {
            const response = await fetch("http://localhost:8080/skarmory/user/login/" + username)
            if (response.status === 400) {
                setError(true);
                setLogin(false);
            }
            else if (response.status !== 200) {
                setError(true);
                setLogin(false);
            }
            else {
                const data = await response.json();
                const passwordHashed = data.password;
                const passwordAttempt = bcrypt.hashSync(password, data.salt);
                if (passwordHashed === passwordAttempt) {
                    setLogin(true);
                    setError(false);
                    redirectToHome();
                }
            }
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {username} successfully logged in!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Your username or password were incorrect, please try again!</h1>
            </div>
        );
    };

    return (
        <div className="login-form">
            <div>
                <h1>User Login</h1>
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Username</label>
                <input onChange={handleUsername} className="input"
                       value={username} type="text" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />

                <button onClick={handleLogin} className="register-btn" type="submit">
                    Login
                </button>
            </form>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
        </div>
    );
}