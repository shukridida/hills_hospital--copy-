import React, { useEffect, useState } from 'react';
import Patient from '../components/Patient';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients');
            const data = await response.json();
            setPatients(data);
        };

        fetchPatients();
    }, []);

    return (
        <div>
            <h2>Patients</h2>
            <div className="patients-list">
                {patients.map((patient) => (
                    <Patient key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    );
};

export default Patients;