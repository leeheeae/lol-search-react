import client from './client';

//소환사 이름으로 검색
export const summonerByNameSearch = ({ name }) =>
  client.get(`/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`);
