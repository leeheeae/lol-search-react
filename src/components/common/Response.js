import React from 'react';
import styled from 'styled-components';

const ResponseBox = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

const Response = ({ children }) => {
  return <ResponseBox>{children}</ResponseBox>;
};

export default Response;
