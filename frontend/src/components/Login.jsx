import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('https://megaminds-project.vercel.app/user/login', {
                email,
                password
            });

            setMessage(response.data.message); 
            setError(null); 
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
            setMessage(null); 
        }
    };

    return (
        <div className="container mx-auto mt-40">
            <h1 className="text-3xl text-center mb-6">Log In</h1>
            
            <form className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-2xl h-96" onSubmit={handleLogin}>
                <div className="mb-8"> 
                    <div className="mb-12"> 
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-14"> 
                        <label className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
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
