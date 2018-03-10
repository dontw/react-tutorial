import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  padding: 1em;
  font-size: 1em;
  border-radius: 3px;
  margin: 0 1em;
  border: 2px solid palevioletred;
`;

const Props = () => (
  <section>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </section>
);

export default Props;

