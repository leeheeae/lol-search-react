import client from './client';

const config = {
  url: `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/ko_KR`,
};

//챔피언 번호로 검색
// export const summonerByNameSearch = (id) =>
//   client.get(`${config.url}/champion.json`).then(({ data }) => {
//     const result = Object.keys(data.data)
//       .map((key) => data.data[key])
//       .filter((champKey) => champKey.key === id.toString());
//     return result;
//   });
//챔피언 번호로 검색
export const summonerByNameSearch = (id) =>
  client.get(`${config.url}/champion.json`).then(({ data }) => {
    return data;
  });
