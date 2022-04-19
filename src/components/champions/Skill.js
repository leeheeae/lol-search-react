import React from 'react';
import styled from 'styled-components';

const SkillBox = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .skill-key {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
  .skill-text {
    display: none;
    border-radius: 4px;
    width: 250px;
    padding: 1rem 1.2rem;
    position: absolute;
    top: 60px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    line-height: 1.4;
    font-size: 12px;
    font-weight: 300;

    .spell-name {
      color: #f56d91;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .spell-description {
      margin-top: 8px;
    }
  }

  &:hover .skill-text {
    display: block;
  }
`;

const Skill = ({ skill, passive }) => {
  return (
    <SkillBox>
      {skill && (
        <>
          <img
            src={`
              https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/${skill.image.full}`}
            alt="img"
          />
          <div className="skill-key">{skill.id.substr(-1)}</div>
          <div className="skill-text">
            <h4 className="spell-name">{skill.name}</h4>
            <div>{skill.cooldown}</div>
            <div>소모: {skill.costType}</div>
            <div>범위: {skill.rangeBurn}</div>
            <div className="spell-description">{skill.description}</div>
          </div>
        </>
      )}
      {passive && (
        <>
          <img
            src={`
              http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/${passive.image.full}`}
            alt="img"
          />
          <div className="skill-text">
            <h4 className="spell-name">{passive.name}</h4>
            <div className="spell-description">{passive.description}</div>
          </div>
        </>
      )}
    </SkillBox>
  );
};

export default Skill;
