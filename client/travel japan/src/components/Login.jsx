import React, { useState } from 'react';
import background from '../assets/background.jpg';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };

  const loginContainerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={loginContainerStyle} className='d-flex justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded w-25 border border-dark shadow-lg'>
        <div>
          <h1 className='text-center font-semibold text-3xl'>Login</h1>
        </div>
        <hr className='mt-3' />
        <div className='mt-3'>
          <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email'>
                <strong>Email</strong>
              </label>
              <input
                type='email'
                placeholder='Enter Email'
                name='email'
                onChange={handleInput}
                className='form-control rounded-0'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>
                <strong>Password</strong>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                onChange={handleInput}
                className='form-control rounded-0'
              />
            </div>
            <button type='submit' className='btn btn-primary w-100 rounded-0 mb-3'>
              <strong>Log In</strong>
            </button>
            <div className='mb-3'>
              <a href='#' className='text-slate-600'>
                Forgot Password?
              </a>
            </div>
            <button className='btn btn-default border w-100 bg-light rounded-0 mb-3'>
              <a href='/register' className='text-decoration-none'>
                Create Account
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
