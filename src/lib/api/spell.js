import client from './client';

const config = {
  url: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
};

//스펠
// https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR/summoner.json
export const spellSearch = () =>
  client.get(`${config.url}/summoner.json`).then(({ data }) => data);

//아이템
// https://ddragon.leagueoflegends.com/cdn/12.8.1/data/ko_KR/item.json
export const itemSearch = () =>
  client.get(`${config.url}/item.json`).then(({ data }) => data);
