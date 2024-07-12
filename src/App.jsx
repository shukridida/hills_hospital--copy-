import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Symptoms from './pages/Symptoms';
import Login from './pages/Login';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    < Routes>
                        <Route exact path="/" element={Home} />
                        <Route path="/login" element={Login} />
                        <ProtectedRoute path="/doctors" element={Doctors} />
                        <ProtectedRoute path="/patients" element={Patients} />
                        <ProtectedRoute path="/symptoms" element={Symptoms} />
                    </ Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;