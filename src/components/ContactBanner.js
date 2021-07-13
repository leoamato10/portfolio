import React from 'react';
import styled from 'styled-components';
import Button from './ButtonE';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: #4f8aba;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          {/* <PText>Have a project in mind</PText> */}
          <h3 className="contactBanner__heading">Get in touch</h3>
          <Button btnText="Contact Now" btnLink="https://wa.link/9dv88h" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
