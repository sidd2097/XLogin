import React, {useState} from  'react';
import './Login.css';

const Login = ()=> {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username === 'user' && password === 'password') {
            setMessage(`Welcome, ${username}!`);
        } else {
            setMessage('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
                {message && <p className='message'>{message}</p>}
        </div>
    )
};

export default Login;