import client from './client';
import qs from 'qs';
import axios from 'axios';

const config = {
  url: {
    ddragon: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
    riot: `https://asia.api.riotgames.com/lol/match/v5/matches/`,
  },
};

//소환사 게임 전적 검색
export const matchByPuuid = ([puuid, queue, type]) => {
  const params = {
    queue,
    type,
    startTime: 0,
    start: 0,
    count: 10,
    api_key: process.env.REACT_APP_RIOT_KEY,
  };
  return client.get(`${config.url.riot}by-puuid/${puuid}/ids`, {
    params,
  });
};

//게임 전적 상세
export const matchByMatchId = (matchList) => {
  if (!matchList) return;

  return axios.all(
    matchList.map((item) =>
      axios.get(
        `${config.url.riot}${item}?api_key=${process.env.REACT_APP_RIOT_KEY}`,
      ),
    ),
  );
};
