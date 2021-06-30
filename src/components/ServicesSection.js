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
            desc="Me considero una persona empatica con buenas habilidades de comunicacion y apoyo al equipo. Un equipo contento siempre dará mejores resultados."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Ability to learn and grow"
            desc="Soy feliz donde puedo crecer y desarrollarme, aprender cosas nuevas es un must en mi dia a dia."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Business focused"
            desc="El codigo es solo una parte del desarrollo. Siempre tengo en cuenta la solucion que estamos brindando y para quien lo estamos haciendo."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
