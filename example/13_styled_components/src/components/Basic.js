import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: grey;
  `;

const Basic = () => (
  <Wrapper>
    <Title>hi</Title>
  </Wrapper>
);

export default Basic;

