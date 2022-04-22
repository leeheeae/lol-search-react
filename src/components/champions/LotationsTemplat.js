import React from 'react';
import styled from 'styled-components';
import ContentsTitle from '../common/ContentsTitle';
import Lotations from './Lotations';

const LotationsTemplatBlock = styled.div`
  width: 100%;

  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

const ListBox = styled.ul`
  margin-top: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 18px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const LotationsTemplat = ({ marginTop, champInfo, loationsChamps }) => {
  return (
    <LotationsTemplatBlock marginTop={marginTop}>
      <ContentsTitle text={'금주의 로테이션 챔피언'} />
      <ListBox>
        {loationsChamps &&
          loationsChamps.map((champ) => (
            <Lotations champInfo={champInfo} champId={champ} key={champ} />
          ))}
      </ListBox>
    </LotationsTemplatBlock>
  );
};

export default LotationsTemplat;
