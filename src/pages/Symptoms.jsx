import React, { useEffect, useState } from 'react';
import Symptom from '../components/Sympotms';

const Symptoms = () => {
    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        const fetchSymptoms = async () => {
            const response = await fetch('/api/symptoms');
            const data = await response.json();
            setSymptoms(data);
        };

        fetchSymptoms();
    }, []);

    return (
        <div>
            <h2>Symptoms</h2>
            <div className="symptoms-list">
                {symptoms.map((symptom) => (
                    <Symptom key={symptom.id} symptom={symptom} />
                ))}
            </div>
        </div>
    );
};

export default Symptoms;
