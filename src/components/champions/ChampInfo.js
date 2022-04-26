import React from 'react';
import styled from 'styled-components';
import Response from '../common/Response';
import Skill from './Skill';
import { champListTabs } from '../../lib/conifg';

const ChampInfoBox = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;

  .champ-name {
    font-size: 1.6rem;
  }
`;

const InfoBox = styled.div`
  margin-left: 30px;

  .tags {
    margin-bottom: 6px;
    font-size: 0.86rem;
    color: #888;
    display: flex;

    li + li {
      margin-left: 6px;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
`;

const SkillList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.4rem;

  > div + div {
    margin-left: 10px;
  }
`;

const SkinList = styled.div`
  margin-top: 5rem;

  .skinBox {
    margin-top: 10px;
    border: 2px solid #131629;
    border-radius: 3px;
    background-color: #fff;
    display: flex;
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

const Tips = styled.div`
  margin-top: 5rem;

  .tips {
    border: 2px solid #131629;
    border-radius: 3px;
    display: flex;
    background-color: #fff;

    > div {
      width: 50%;
      padding: 1.1rem;

      & + div {
        border-left: 1px solid #ccc;
      }

      h3 {
        font-size: 1.1rem;
      }
    }

    .ally {
      h3 {
        color: #2f42bb;
      }
    }

    .enemy {
      h3 {
        color: #f56d91;
      }
    }

    ul {
      margin-top: 8px;
    }

    li {
      font-size: 0.96rem;
      line-height: 1.5;
      margin-bottom: 6px;
      &::before {
        content: '\\B7';
        margin-right: 6px;
      }
    }
  }
`;

// \\B7

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
              <ul className="tags">
                {champInfo.tags.map((tag) =>
                  champListTabs
                    .filter((item) => item.tag === tag)
                    .map((name) => <li key={name.name}>#{name.name}</li>),
                )}
              </ul>
              <h2 className="champ-name"> {champInfo.name}</h2>
              <SkillList>
                <Skill passive={champInfo.passive} />
                <Skill skill={champInfo.spells[0]} />
                <Skill skill={champInfo.spells[1]} />
                <Skill skill={champInfo.spells[2]} />
              </SkillList>
            </InfoBox>
          </ChampInfoBox>

          <Tips>
            <Title>TIPS</Title>
            <div className="tips">
              <div className="ally">
                <h3>아군 팁 😎</h3>
                <ul>
                  {champInfo.allytips.map((tip) => (
                    <li>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="enemy">
                <h3>적군 팁 😎</h3>
                <ul>
                  {champInfo.enemytips.map((tip) => (
                    <li>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Tips>

          <SkinList>
            <Title>SKIN</Title>
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
