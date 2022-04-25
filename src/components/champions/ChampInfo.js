import React from 'react';
import styled from 'styled-components';
import Response from '../common/Response';
import Skill from './Skill';
import data from '../../db/data.json';

const ChampInfoBox = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-end;

  .champ-name {
    font-size: 1.6rem;
  }
`;

const InfoBox = styled.div`
  margin-left: 30px;
`;

const SkillList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > div + div {
    margin-left: 10px;
  }
`;

const ChampInfo = ({ champInfo }) => {
  const champ = data.data.Aatrox;
  // console.log(champ);

  console.log(champInfo);

  return (
    <>
      <Response>
        <ChampInfoBox>
          <div className="champ-img">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champ.image.full}`}
              alt="img"
            />
          </div>
          <InfoBox>
            <h2 className="champ-name"> {champ.name}</h2>
            <SkillList>
              <Skill passive={champ.passive} />
              <Skill skill={champ.spells[0]} />
              <Skill skill={champ.spells[1]} />
              <Skill skill={champ.spells[2]} />
            </SkillList>
          </InfoBox>
        </ChampInfoBox>
      </Response>
    </>
  );
};

export default ChampInfo;
