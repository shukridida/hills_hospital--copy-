import React from 'react';

const Symptom = ({ symptom }) => {
    return (
        <div className="symptom-card">
            <h3>{symptom.name}</h3>
            <p><strong>Diagnosis:</strong> {symptom.diagnosis}</p>
            <p><strong>Description:</strong> {symptom.description}</p>
        </div>
    );
};

export default Symptom;