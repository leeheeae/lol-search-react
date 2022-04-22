import React from 'react';
import styled from 'styled-components';

const ContentsTitleBlock = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

const ContentsTitle = ({ text }) => {
  return (
    <ContentsTitleBlock>
      <h1>{text}</h1>
    </ContentsTitleBlock>
  );
};

export default ContentsTitle;
