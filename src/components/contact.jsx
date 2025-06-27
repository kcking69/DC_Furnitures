import { useState } from 'react';
import React from 'react';

const initialState = {
  name: '',
  phone: '',
  message: '',
};

export const Contact = (props) => {
  const [{ name, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '2348137317141'; // Replace with your WhatsApp number
    const text = encodeURIComponent(
      `Hi, my name is ${name}. I want to buy ${message}. Here's my Phone Number ${phone} just incase.`
    );

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`,
      '_blank'
    );
    clearState();
  };

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to contact us via WhatsApp and
                  we will get back to you as soon as possible.
                </p>
              </div>
              <form
                name='whatsappForm'
                validate
                onSubmit={handleWhatsAppSubmit}
              >
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Phone no'
                        required
                        onChange={handleChange}
                        value={phone}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='What do you want to buy?'
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-success btn-lg'>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li> */}
                  <li>
                    <a href={props.data ? props.data.whatsapp : '/'}>
                      <i className='fa fa-whatsapp'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2025 DEI CONSILIUM FURNITURES. Design by{' '}
            <a href='https://nkemdilim.netlify.app/' rel='nofollow'>
              Collins
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
