import React from 'react';
import styled from 'styled-components';
import ContentsTitle from '../common/ContentsTitle';

const LotationsTemplatBlock = styled.div`
  width: 100%;

  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

const ListBox = styled.ul`
  margin-top: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 18px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const LotationsTemplat = ({ children, marginTop }) => {
  return (
    <LotationsTemplatBlock marginTop={marginTop}>
      <ContentsTitle text={'금주의 로테이션 챔피언'} />
      <ListBox>{children}</ListBox>
    </LotationsTemplatBlock>
  );
};

export default LotationsTemplat;
