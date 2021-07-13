import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="These are my principal" heading="Assets" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Intra & Interpersonal skills"
            desc="I consider myself a focused and empathetic person with good communication skills and team support. A happy team will always give better results."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Ability to adapt, learn and grow"
            desc="Soy feliz donde puedo crecer y desarrollarme, aprender cosas nuevas es un must en mi dia a dia."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Proactive and Business oriented"
            desc="The code is only part of the development. I always keep in mind the solution we are providing and for whom we are doing it."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
