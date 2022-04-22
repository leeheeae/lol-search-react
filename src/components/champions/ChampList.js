import React from 'react';
import styled from 'styled-components';
import { infoSearchBox } from '../../lib/infoSearch';
import { tagCheck } from '../../lib/infoSearch';
import { champTagsConfig } from '../../lib/conifg';

const ChampListBlock = styled.div``;

const ChampList = ({ champInfo }) => {
  // console.log(tagCheck(champInfo));

  return (
    <ChampListBlock>
      {champInfo.map((champ) => (
        <div key={champ.key}>
          <div>이름 : {champ.name}</div>
          <div>
            태그 :{' '}
            {champ.tags.map((tag, index) => (
              <span key={index}>#{champTagsConfig[tag]}</span>
            ))}
          </div>
          <div>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champ.image.full}`}
              alt=""
            />
          </div>
        </div>
      ))}
    </ChampListBlock>
  );
};

export default ChampList;
