import React from 'react';

function Footer() {
    return (
        <footer className="bg-green-800 text-white py-8 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-400">
                            We are passionate developers dedicated to creating the best web experiences.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-400">About</a></li>
                            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-400">
                            Email: info@example.com
                        </p>
                        <p className="text-gray-400">
                            Phone: +123 456 7890
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-gray-400">
                    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
