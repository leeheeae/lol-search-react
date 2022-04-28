import client from './client';
import qs from 'qs';

const config = {
  url: {
    ddragon: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
    riot: `https://asia.api.riotgames.com/lol/match/v5/matches/`,
  },
};
// /KR_5885950338?api_key=RGAPI-2ce16d6d-262a-4c0f-84f4-230a5a751f54

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

  return client.get(`${config.url.riot}by-puuid/${puuid}/ids`, { params });
};

// https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/FKt5-VsIjCHODKb0IDpTqXw8j8n2Rlx9Hnnai9IDMS9cZniyW88tasJ26N5AtHnXRFUDrV1bL9KA9Q/ids?startTime=0&queue=450&type=normal&start=0&count=10&api_key=RGAPI-2ce16d6d-262a-4c0f-84f4-230a5a751f54
