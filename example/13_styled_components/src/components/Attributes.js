import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em',
})`
  color: palevioletred;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const Example = () => (
  <section>
    <Input placeholder="A small text input" size="1em" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </section>
);

export default Example;

