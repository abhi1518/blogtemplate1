import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.scss";
import { registerLogin } from '../../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [inCorrect, setIncorreact] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    // Perform your form validation here
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      handleSubmit();
      // Form is valid, navigate to another page
      // navigate('/login'); // Replace '/another-page' with the actual path
    }
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // setLoading(true); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password );

      const result = await registerLogin(formData);
      console.log(result);
      setUserId(result.userid);
      setName(result.name);
      localStorage.setItem('userId', result.userid);
        localStorage.setItem('name', result.name);
      // setUserId(result.data.userid);
      console.log(userId);
      if(result.success){
        // setLoading(false);
        setStatus(result.data);
        
        console.log(result.userid);
        localStorage.setItem('isLogin', true);
        
        // history.push('/');
        navigate('/');
        // window.location.reload();
        // window.location.href = '/';
      }else {
        setIncorreact(true);
        console.log(inCorrect);
      }
      
      console.log(status);
      // setUserId(status.data.userid);
    } catch (error) {
      // setLoading(false);
      setIncorreact(true);
        console.log(inCorrect);
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  return (
    <div className="login">
      <div className="card">
      <div className="left">
        
      </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <span>Email</span>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <span>Password</span>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              className="mb-3"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <Link to="/forget-email" className='text-right mb-2'>
              Forget Password
            </Link>

            {isLoading ? (
              <div className="loader">Loading...</div>
            ) : (
              <button onClick={handleRegister}>Login</button>
            )}
            <span className="mt-3">Dont you have an account?</span>
            <Link to="/register">
              <button className='mt-2'>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
