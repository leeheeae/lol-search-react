import React from 'react';
import styled from 'styled-components';
import Response from '../common/Response';
import data from '../../db/data.json';

const ChampInfoBox = styled.div`
  display: flex;
`;

const ChampInfo = () => {
  const champ = data.data.Aatrox;
  // console.log(champ);

  return (
    <>
      <Response>
        <ChampInfoBox>
          <div>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champ.image.full}`}
              alt="img"
            />
          </div>
          <div>이름 : {champ.name}</div>
        </ChampInfoBox>
      </Response>
    </>
  );
};

export default ChampInfo;
