import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [sendResult, setSendResult] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aw0fvr9',
        'template_nyuo1ov',
        e.target,
        'user_cXmdEUA3q0wBmUc3mFN1t'
      )
      .then(
        (result) => {
          setSendResult('Your message was sent.');
        },
        (error) => {
          setSendResult('Something went wrong.');
        }
      );
    e.target.reset();
  };

  return (
    <>
      <FormStyle onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>

          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            />
          </div>
          <div className="col-8 pt-3 mx-auto">
            <button type="submit" className="btn btn-info" value="Send Message">
              Send Message
            </button>
          </div>
          <div>
            {sendResult ? (
              <h3 style={{ color: 'green', paddingTop: 15 }}>{sendResult}</h3>
            ) : null}
          </div>
        </div>
      </FormStyle>
    </>
  );
}
