import React from 'react';

const Login = () => {
  return (
    <div className="loginArea container mt-5 d-flex justify-content-center align-items-center">
      <div className='loginBody col-md-4' style={{ border: '1px solid black', padding: '20px' }}>
        <h2>Login</h2>
        <form>
            <div className="mb-3">
            <label htmlFor="card number" className="form-label">Card Number</label>
            <input type="card number" className="form-control" id="card number" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="loginbutton btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
