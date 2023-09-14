import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";
import { registerPassword } from '../../api';

const RegisterPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    // Perform your form validation here
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    if (confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm password is required';
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
      formData.append('password', password );

      const result = await registerPassword(formData);
      console.log(result);
      if(result.status){
        navigate('/login');
        // window.location.href = '/login';
      }
      setStatus(result);
    } catch (error) {
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
            <span>Password</span>
            <input
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <span>Confirm Password</span>
            <input
              type="text"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

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

export default RegisterPassword;
