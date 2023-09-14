import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.scss";
import { registerUser } from '../../api';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    // Perform your form validation here
    if (firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = 'Invalid email format';
    }
    if (!phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Phone number must be 10 digits';
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
      formData.append('name', firstName);
      formData.append('email', email);
      formData.append('mobile', phone);
      formData.append('address', lastName);

      const result = await registerUser(formData);
      console.log(result);
      localStorage.setItem('userid', result.userid);
      if(result.status){
        // window.location.href = '/register/otp';
        navigate('/register-otp');
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
          <h1>Register</h1>
          <form>
            <span>First name</span>
            <input
              type="text"
              placeholder="Enter Your First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <span>Last name</span>
            <input
              type="text"
              placeholder="Enter Your Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <span>Email</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <span>Phone No.</span>
            <input
              type="number"
              placeholder="Enter Your Phone No."
              value={phone}
              className='mb-2'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            {isLoading ? (
              <div className="loader">Loading...</div>
            ) : (
              <button onClick={handleRegister}>Register</button>
            )}
            <span className="mt-3">Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
