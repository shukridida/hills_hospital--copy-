import React, { useEffect, useState } from 'react';
import Doctor from '../components/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await fetch('/api/doctors');
            const data = await response.json();
            setDoctors(data);
        };

        fetchDoctors(); 
    }, []);

    return (
        <div>
            <h2>Doctors</h2>
            <div className="doctors-list">
                {doctors.map((doctor) => (
                    <Doctor key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default Doctors;
