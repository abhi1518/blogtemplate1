import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";

const ForgetVerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    // Perform your form validation here
    if (otp.trim() === '') {
      newErrors.otp = 'OTP is required';
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      // Form is valid, navigate to another page
      navigate('/another-page'); // Replace '/another-page' with the actual path
    }
  };

  return (
    <div className="login">
      <div className="card">
      <div className="left"></div>
        <div className="right">
          <h1>Verify OTP</h1>
          <form>
            <span>Enter OTP sent to your email</span>
            <input
              type="text"
              placeholder="Enter Your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            {errors.otp && <p className="error">{errors.otp}</p>}
            {isLoading ? (
              <div className="loader">Loading...</div>
            ) : (
              <button onClick={handleRegister}>Proceed</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetVerifyOtp;
