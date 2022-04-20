import client from './client';

const config = {
  url: `https://kr.api.riotgames.com/lol`,
};

//소환사 이름으로 검색
export const summonerByNameSearch = (name) =>
  client.get(
    `${config.url}/summoner/v4/summoners/by-name/${name}?api_key=${process.env.REACT_APP_RIOT_KEY}`,
  );

/*
소환사 랭크 검색 
GET / SummonerId 
*/
export const summonerLeague = (encryptedSummonerId) =>
  client.get(
    `${config.url}/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${process.env.REACT_APP_RIOT_KEY}`,
  );
