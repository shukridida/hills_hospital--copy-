import React from 'react';

const Doctor = ({ doctor }) => {
    return (
        <div className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Status:</strong> {doctor.status}</p>
        </div>
    );
};

export default Doctor;