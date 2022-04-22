import client from './client';

const config = {
  url: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
};

//챔피언 번호로 검색
export const summonerByNameSearch = () =>
  client.get(`${config.url}/champion.json`).then(({ data }) => {
    return data;
  });
