import client from './client';

const config = {
  url: `https://kr.api.riotgames.com/lol/summoner/v4`,
};

//소환사 이름으로 검색
export const summonerByNameSearch = (name) =>
  client.get(
    `${config.url}/summoners/by-name/${name}?api_key=${process.env.REACT_APP_RIOT_KEY}`
  );
