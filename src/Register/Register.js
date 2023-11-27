import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://212.227.227.190:3000/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message === 'Registration successful') {
                    // Registration successful, handle redirection or other actions
                    console.log('Registration successful');
                } else {
                    // Handle registration failure
                    console.error('Registration failed');
                }
            } else {
                // Handle HTTP error
                console.error('HTTP error during registration:', response.status);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='Register'>
            <h1 className="sweet-title">
                <span data-text="Fast Party">Fast Party</span>
            </h1>
            <div className='inputBox'>
                <form>
                    <h3 className='register'>Register</h3>
                    <hr className='titleSeparation' />
                    <div className='mb-2'>
                        <input
                            placeholder='Username'
                            id='username'
                            className='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            placeholder='Email'
                            id='email'
                            className='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            placeholder='Password'
                            id='password'
                            className='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            placeholder='Repeat Password'
                            className='password'
                            type='password'
                        />
                    </div>

                    <div className='d-grid'>
                        <button
                            id='buttonRegister'
                            className='buttonRegister'
                            onClick={handleRegister}
                        >
                            REGISTER
                        </button>
                    </div>
                    <p className='changeRegister'>
                        You already have an account?{' '}
                        <Link className='linkChangeRegister' to={"/"}>
                            <a className='linkChangeRegister'>Login</a>
                        </Link>
                    </p>
                </form>
            </div>
            <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
                <path fill="#d46bd0" fillOpacity={"100%"} className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
                <path fill="#e061d9" fillOpacity={"70%"} className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
                <path fill="#ef7ce9" fillOpacity={"70%"} className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
                <path fill="#f722ecaa" fillOpacity={"40%"} className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
            </svg>
        </div>
    );
}

export default Register;