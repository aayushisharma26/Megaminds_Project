import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:4000/user/register', {
                name,
                email,
                password
            });

            setMessage(response.data.message); 
            alert('Signup successful!');
            setError(null); 

            // Optionally, store user info in localStorage
            // localStorage.setItem('user', JSON.stringify({ name, email }));

        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
            setMessage(null); 
        }
    };

    return (
        <div className="container mx-auto mt-40"> 
            <h1 className="text-3xl text-center mb-6">Please Fill Your Information</h1>
            <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-2xl" onSubmit={handleSignup}> 
             
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

            
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

          
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Sign UP
                </button>

                {message && <p className="text-green-600 mt-4">{message}</p>}
                {error && <p className="text-red-600 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
