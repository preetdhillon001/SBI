import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    setSubmittedData([...submittedData, newData]);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contactArea container mt-5 d-flex justify-content-center align-items-center">
      <div className='contactBody col-md-4' style={{ border: '1px solid black', padding: '20px' }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className='col-md-4 mt-3'>
        <h3>Submitted Data:</h3>
        {submittedData.map((data, index) => (
          <div key={index} className={data.message.includes('important') ? 'alert alert-danger' : 'alert alert-info'}>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
