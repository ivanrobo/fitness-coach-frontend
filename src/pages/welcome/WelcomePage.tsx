import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegistrationForm from '../../components/register/RegistrationForm';
import './WelcomePage.css';

type ViewMode = 'welcome' | 'login' | 'register';

const WelcomePage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('welcome');

  if (currentView === 'login') {
    return (
      <div className="welcome-page">
        <div className="welcome-header">
          <h1>Login to Fitness Coach AI</h1>
        </div>
        <LoginForm />
        <div className="switch-view">
          <p>
            Don't have an account?{' '}
            <button 
              onClick={() => setCurrentView('register')}
              className="link-button"
            >
              Sign up here
            </button>
            {' | '}
            <button 
              onClick={() => setCurrentView('welcome')}
              className="link-button"
            >
              Back to Welcome
            </button>
          </p>
        </div>
      </div>
    );
  }

  if (currentView === 'register') {
    return (
      <div className="welcome-page">
        <div className="welcome-header">
          <h1>Join Fitness Coach AI</h1>
        </div>
        <RegistrationForm />
        <div className="switch-view">
          <p>
            Already have an account?{' '}
            <button 
              onClick={() => setCurrentView('login')}
              className="link-button"
            >
              Login here
            </button>
            {' | '}
            <button 
              onClick={() => setCurrentView('welcome')}
              className="link-button"
            >
              Back to Welcome
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="welcome-page">
      <div className="welcome-hero">
        <h1>Welcome to Fitness Coach AI</h1>
        <p className="welcome-subtitle">
          Your personal AI-powered fitness companion for science-based training and nutrition
        </p>

        <div className="welcome-actions">
          <button 
            onClick={() => setCurrentView('login')}
            className="primary-button"
          >
            Login
          </button>
          <button 
            onClick={() => setCurrentView('register')}
            className="secondary-button"
          >
            Get Started
          </button>
        </div>

        <div className="welcome-footer">
          <p>Start your fitness transformation today!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;