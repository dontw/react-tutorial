import React from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  display: block;
  `;

const Example = () => (
  <section>
    <Link>Unstyled, boring Link</Link>
    <StyledLink className="my-class-a">
      <h2>milkmidi</h2>
    </StyledLink>
  </section>
);

export default Example;

