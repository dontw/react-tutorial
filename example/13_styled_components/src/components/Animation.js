import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppendLoading = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: #d3d3d3;
  &:before {
    animation: ${rotate360} 1s linear infinite;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    border: 3px solid;
    border-color: black;
    border-left-color: transparent;
    border-radius: 50%;
    z-index: 1;
  }
`;


const Example = () => (
  <section>
    <AppendLoading />
  </section>
);

export default Example;

