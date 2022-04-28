import client from './client';
import qs from 'qs';
import axios from 'axios';

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

//게임 전적 상세
// export const matchByMatchId = (matchId) => {
//   if (!matchId) return;
//   const params = {
//     api_key: process.env.REACT_APP_RIOT_KEY,
//   };

//   return client.get(`${config.url.riot}${matchId}`, { params });
// };

export const matchByMatchId = (matchList) => {
  if (!matchList) return;

  return axios.all(
    matchList.map((item) =>
      axios.get(
        `${config.url.riot}${item}?api_key=${process.env.REACT_APP_RIOT_KEY}`,
      ),
    ),
  );
  // .then(
  //   axios.spread((...res) => {
  //     console.log(res);
  //     return res;
  //   }),
  // );
};
// https://asia.api.riotgames.com/lol/match/v5/matches/fOtwFgIah-lqL-oEZFDX9rDmk_oY_WQZH_VbnQwduamDqa4?api_key=RGAPI-2ce16d6d-262a-4c0f-84f4-230a5a751f54
