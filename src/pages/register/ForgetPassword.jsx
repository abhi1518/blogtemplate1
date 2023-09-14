import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";

const ForgetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    if (confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required';
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
          <h1>Reset Password</h1>
          <form>
            <span>Password</span>
            <input
              type="text"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <span>Confirm Password</span>
            <input
              type="text"
              placeholder="Enter Your Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

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

export default ForgetPassword;
