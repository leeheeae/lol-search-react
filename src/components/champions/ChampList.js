import React from 'react';
import styled from 'styled-components';
import { infoSearchBox } from '../../lib/infoSearch';

const ChampListBlock = styled.div``;

const ChampList = ({ champInfo }) => {
  //태그 종류 찾기
  const tagCheck = (champ) => {
    const tags = champInfo.map((champ) => champ.tags);
    const tagsArr = Object.assign(
      {},
      tags.map((item) => item[0]),
    );
    const tagsArrValues = Object.values(tagsArr);
    return tagsArrValues.filter((v, i) => tagsArrValues.indexOf(v) === i);
  };

  console.log(tagCheck(champInfo));

  return (
    <ChampListBlock>
      {champInfo.map((champ) => (
        <div key={champ.key}>
          <div>이름 : {champ.name}</div>
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
