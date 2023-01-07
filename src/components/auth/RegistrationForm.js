import { useState } from 'react';
import  { useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'
import { API_SERVER } from '../../config/config'

export default function RegistrationForm() {

    // States for registration
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [uniqueError, setUniqueError] = useState(false);

    const navigate = useNavigate();

    // Redirect to the login page once registered
    const redirectToSuccess = () => {
        navigate("/registration_success");
    };

    // Handling the name change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || name === '' || email === '' || password === '') {
            setError(true);
        } else {

            const salt = bcrypt.genSaltSync(10);

            var json_body = {
                username: username,
                name: name,
                email: email,
                password: bcrypt.hashSync(password, salt),
                salt: salt,
                role: "reader"
            };

            await fetch(API_SERVER + "users", {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(json_body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => {
                if (response.status === 400) {
                    setUniqueError(true);
                    setSubmitted(false);
                }
                else if (response.status !== 201) {
                    setError(true);
                    setSubmitted(false);
                }
                else {
                    setError(false);
                    setSubmitted(true);
                    redirectToSuccess();
                }
            });
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
                <h1>User {username} successfully registered!!</h1>
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
                <h1>There was an error registering your account, please try again!</h1>
            </div>
        );
    };

    const uniqueErrorMessage = () => {
        return (
            <div
                className="uniqueError"
                style={{
                    display: uniqueError ? '' : 'none',
                }}>
                <h1>Your username or email is already taken, please try again!</h1>
            </div>
        );
    };

    return (
        <div className="register-form">
            <div>
                <h1>User Registration</h1>
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                       value={name} type="text" />

                <label className="label">Username</label>
                <input onChange={handleUsername} className="input"
                       value={username} type="text" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                       value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />

                <button onClick={handleSubmit} className="register-btn" type="submit">
                    Submit
                </button>
            </form>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {uniqueErrorMessage()}
                {successMessage()}
            </div>
        </div>
    );
}