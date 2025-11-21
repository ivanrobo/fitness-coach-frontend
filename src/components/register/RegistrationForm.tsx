import React, { useEffect, useState } from 'react';
import { UserRegistrationRequest } from '../../types/user';
import { Gender } from '../../types/gender';
import './RegistrationForm.css';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const initialFormData: UserRegistrationRequest = {
        username: '',
        password: '',
        email: '',
        dateOfBirth: '',
        gender: Gender.MALE,
        height: 0,
        weight: 0
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState<UserRegistrationRequest>(initialFormData);
    const { user, register, error } = useAuth();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'gender' ? value as Gender : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await register(formData);
        if (!error) {
            setFormData(initialFormData);
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);

    return (
        <div className="registration-form-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="username">Username *</label>
                    <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" required />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password *</label>
                    <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
                <div className="form-field">
                    <label htmlFor="dateOfBirth">Date of Birth *</label>
                    <input id="dateOfBirth" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={formData.gender || ''} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="height">Height (cm)</label>
                    <input id="height" type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Enter your height" />
                </div>
                <div className="form-field">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input id="weight" type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Enter your weight" />
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default RegistrationForm;
