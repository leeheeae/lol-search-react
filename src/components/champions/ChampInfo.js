import React from 'react';
import styled from 'styled-components';
import Response from '../common/Response';
import Skill from './Skill';

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
  return (
    <>
      {champInfo && (
        <Response>
          <ChampInfoBox>
            <div className="champ-img">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champInfo.image.full}`}
                alt="img"
              />
            </div>
            <InfoBox>
              <h2 className="champ-name"> {champInfo.name}</h2>
              <SkillList>
                <Skill passive={champInfo.passive} />
                <Skill skill={champInfo.spells[0]} />
                <Skill skill={champInfo.spells[1]} />
                <Skill skill={champInfo.spells[2]} />
              </SkillList>
            </InfoBox>
          </ChampInfoBox>
        </Response>
      )}
    </>
  );
};

export default ChampInfo;
