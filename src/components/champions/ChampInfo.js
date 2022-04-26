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
    border-radius: 2px;
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
    position: relative;
    padding: 0.5rem;
    overflow: hidden;

    .skinName {
      width: 100%;
      padding: 0.8rem;
      color: #fff;
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`;

const ChampInfo = ({ champInfo, skinActiveIndex, onClickSkinTab }) => {
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
                  <li key={skin.num} onClick={() => onClickSkinTab(skin.num)}>
                    <div>
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champInfo.id}_${skin.num}.jpg`}
                        alt={skin.name}
                      />
                    </div>
                    <h3>{skin.name}</h3>
                  </li>
                ))}
              </ul>
              <div className="bigImg">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champInfo.id}_${skinActiveIndex}.jpg`}
                  alt={'img'}
                />
                <h3 className="skinName">
                  {champInfo.skins
                    .filter((skin) => skin.num === skinActiveIndex)
                    .map((item) => item.name)}
                </h3>
              </div>
            </div>
          </SkinList>
        </Response>
      )}
    </>
  );
};

export default ChampInfo;
