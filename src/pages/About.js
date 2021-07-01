import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/ButtonE';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Leonardo Amato</span>
              </p>
              <h2 className="about__heading">
                A React Native Mobile developer
              </h2>
              <div className="about__info">
                <PText>
                  I am from Mendoza, Argentina. A place of beauty and nature
                  around the Mountains. Since my childhood, I love computers and
                  technology. For diferent things that happened in my life I
                  ended up estudying business related career (still loving it)
                  but in the last years I realized that the thing I really
                  wanted to do was to become a software developer.
                  <br /> <br />
                  I started learning how to code about two years ago with
                  youtube tutorials and Udemy courses. I went from zero to
                  intermmediate level, now I can happily say that I´m coding my
                  first apps. I am a true believer that technology came to
                  improve people's lives and I want to be part of that process.
                  <br />
                  <br />
                  My vision is to join a company that really works as a team and
                  does stuff that makes big changes in our world.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://drive.google.com/uc?export=download&id=1KyQ3ZNIejUvx8XGVvx4a7sCxfp4lnWpw"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title=" Primary"
                items={['Juan de Coria Bohórquez - 1993 to 1999']}
              />
              <AboutInfoItems
                title="Secondary"
                items={[
                  'Graduated in Economy and Business Management / I.S.E.P - 2000 to 2004',
                ]}
              />
              <AboutInfoItems
                title="Collage"
                items={[
                  'Computer Sciences Engineering / Mendoza University - 2005 to 2007',
                ]}
              />
              <AboutInfoItems
                title="Collage"
                items={[
                  'Bachelor’s Degree in Business Administration / Pontificia Católica Argentina University UCA - 2008 to 2013',
                ]}
              />
              <AboutInfoItems
                title="Varsity"
                items={[
                  'Master of Business Administration (MBA) / Francisco de Vitoria University (Madrid) - 2014 to 2016',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Main Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'ReactJs',
                  'React Native',
                  'Redux',
                  'React Navigation',
                  'more...',
                ]}
              />

              <AboutInfoItems
                title="Design"
                items={[
                  'Photoshop',
                  'After Effects',
                  'Premiere',
                  'Illustrator',
                  'more...',
                ]}
              />

              <AboutInfoItems
                title="Others"
                items={[
                  'Git',
                  'Command prompt',
                  'API Rest',
                  'Expo / React Native CLI',
                  'Native Base / React Native Paper',
                  'Others..',
                ]}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItems
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItems
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
