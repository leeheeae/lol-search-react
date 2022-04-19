import React from 'react';
import styled from 'styled-components';

const BackgroundBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

const background = ({ children }) => {
  return <BackgroundBlock>{children}</BackgroundBlock>;
};

export default background;
