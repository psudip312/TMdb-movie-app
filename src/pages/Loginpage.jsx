import React, { useState } from 'react';

const LoginPage = () => {
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();


  const handleEmailChange=(event)=>{
setEmail(event.target.value)
  }
  const handlePasswordChange=(event)=>{
setPassword(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("chalyo")
    
    // Perform login logic with email and password
    // Example: You can send the email and password to an API for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    const token ='your_token_here';
    localStorage.setItem('token',token);
    window.location.href='/';
  };



  // Create an object with the email and password
  const credentials = {
    email,
    password
  };


    // Make a POST request to the API endpoint for authentication
    fetch('https://api.example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('API response:', data);
        
        // Perform additional actions based on the response, such as redirecting to another page
        if (data.success) {
          // Authentication successful, redirect to the home page
          navigate('/');
        } else {
          // Authentication failed, display an error message to the user
          alert('Authentication failed. Please try again.');
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
            <h2 className="text-2xl mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      );
  };


 

export default LoginPage;
