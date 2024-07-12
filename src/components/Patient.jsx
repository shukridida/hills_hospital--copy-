import React from 'react';

const Patient = ({ patient }) => {
    return (
        <div className="patient-card">
            <h3>{patient.name}</h3>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Doctor:</strong> {patient.doctor.name}</p>
        </div>
    );
};

export default Patient;