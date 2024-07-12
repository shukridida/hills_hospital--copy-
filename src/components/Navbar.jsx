import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const history = useNavigate();
    const isAuthenticated = !!localStorage.getItem('authToken');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        history.push('/login');
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isAuthenticated && (
                    <>
                        <li>
                            <Link to="/doctors">Doctors</Link>
                        </li>
                        <li>
                            <Link to="/patients">Patients</Link>
                        </li>
                        <li>
                            <Link to="/symptoms">Symptoms</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                )}
                {!isAuthenticated && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;