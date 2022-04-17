import client from './client';

const config = {
  url: `http://ddragon.leagueoflegends.com/cdn/10.11.1`,
};

export const summonerIcon = (iconid) =>
  client.get(`${config.url}/img/profileicon/${iconid}.png`);
