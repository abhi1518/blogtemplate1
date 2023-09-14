import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";
import { forgetOtp } from '../../api';

const ForgetEmail = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    // Perform your form validation here
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      // Form is valid, navigate to another page
      handleSubmit();
      // Replace '/another-page' with the actual path
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      // formData.append('name', name);
      formData.append('email', email);
      // formData.append('mobile', mobile);
      // formData.append('address', address);

      const result = await forgetOtp(formData);
      console.log(result);
      localStorage.setItem('email', email);
      if(result.success ){
        // window.location.href = '/register/otp';
        navigate('/forget-email');
      }
      setStatus(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  return (
    <div className="login">
      <div className="card">
      <div className="left"></div>
        <div className="right">
          <h1>Reset Password</h1>
          <form>
            <span>Enter your register email</span>
            <input
              type="email"
              placeholder="Register email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

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

export default ForgetEmail;
