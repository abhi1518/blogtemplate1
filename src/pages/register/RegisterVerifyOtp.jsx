import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";
import { registerOtp } from '../../api';

const RegisterVerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);
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
       // Replace '/another-page' with the actual path
       handleSubmit();
    }
  };

  const handleSubmit = async (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('otp', otp);

      const result = await registerOtp(formData);
      console.log(result);
      if(result.success){
        navigate('/register-password');
        // window.location.href = '/register/password';
      } else {
        setIncorreact(true);
        console.log(inCorrect);
      }
      setStatus(result);
    } catch (error) {
      setIncorreact(true);
        console.log(inCorrect);
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  useEffect(() => { 
    setUserid(localStorage.getItem('userid'));
  }, []);

  return (
    <div className="login">
      <div className="card">
      <div className="left"></div>
        <div className="right">
          <h1>Register</h1>
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
              <button onClick={handleRegister}>Register</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterVerifyOtp;
