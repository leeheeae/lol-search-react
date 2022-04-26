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

const SkinList = styled.div`
  margin-top: 5rem;

  .skinBox {
    margin-top: 10px;
    border: 2px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
    display: flex;
  }
  h1 {
    font-size: 2rem;
  }
  img {
    width: 100%;
    border-radius: 3px;
  }

  .list {
    padding: 1rem;
    width: 180px;
    height: 540px;
    overflow-y: auto;
    border-right: 1px solid #ccc;

    li + li {
      margin-top: 1.5rem;
    }

    li {
      width: 100%;
      cursor: pointer;

      h3 {
        margin-top: 4px;
        font-size: 0.86rem;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .bigImg {
    padding: 1rem;
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
          <SkinList>
            <h1>Skin</h1>
            <div className="skinBox">
              <ul className="list">
                {champInfo.skins.map((skin) => (
                  <li key={skin.num}>
                    <div>
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_${skin.num}.jpg`}
                        alt={skin.name}
                      />
                    </div>
                    <h3>{skin.name}</h3>
                  </li>
                ))}
              </ul>
              <div className="bigImg">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg`}
                  alt={'img'}
                />
              </div>
            </div>
          </SkinList>
        </Response>
      )}
    </>
  );
};

export default ChampInfo;
