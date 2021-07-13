import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Leonardo Amato</h1>
          <PText>
            A mobile developer from Mendoza, Argentina. I always focus on
            achieving simpler solutions for smart people :)
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Menu"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+5492615910502',
                link: 'https://wa.link/9dv88h',
              },
              {
                title: 'amatoleonardo1986@gmail.com',
                link: 'mailto:amatoleonardo1986@gmail.com',
              },
              {
                title: 'Mendoza, Argentina',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Instagram',
                link: 'https://www.instagram.com/leoandresamato/',
              },
              {
                title: 'Linkedin',
                link: 'https://www.linkedin.com/in/leonardoamato/',
              },
              {
                title: 'GitHub',
                link: 'https://github.com/leoamato10',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container" />
      </div>
    </FooterStyle>
  );
}
