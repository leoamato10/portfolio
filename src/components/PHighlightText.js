import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Mark = styled.mark`
  background-color: #bcb4b4;
  color: black;
`;

export default function PHighlightText({ children }) {
  return (
    <PStyle className="para">
      <Mark>{children}</Mark>
    </PStyle>
  );
}
