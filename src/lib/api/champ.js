import client from './client';

const config = {
  url: {
    ddragon: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
    riot: `https://kr.api.riotgames.com/lol/platform/v3`,
  },
};

//챔피언 번호로 검색
export const summonerByNameSearch = () =>
  client.get(`${config.url.ddragon}/champion.json`).then(({ data }) => {
    return data;
  });

//로테이션 챔피언 검색
export const championLotaionsSearch = () =>
  client.get(
    `${config.url.riot}/champion-rotations?api_key=${process.env.REACT_APP_RIOT_KEY}`,
  );
