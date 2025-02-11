import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();  

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setMessage('You are already logged in.');
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/user/login', {
                email,
                password
            });

            const { token, user } = response.data;

            if (token && user) {
                localStorage.setItem('authToken', token); 
                localStorage.setItem('user', JSON.stringify(user)); 
                setMessage('Login successful!');
                setError(null);

                navigate('/');  
            } else {
                throw new Error('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
            setMessage(null);
        }
    };

    return (
        <div className="container mx-auto mt-24">
            <h1 className="text-3xl text-center mb-6">Log In</h1>

            <form className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-2xl h-96" onSubmit={handleLogin}>
                <div className="mb-8">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Log In
                </button>

                {message && <p className="text-green-600 mt-6">{message}</p>}
                {error && <p className="text-red-600 mt-6">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
