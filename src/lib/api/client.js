import axios from 'axios';

const client = axios.create({
  baseURL: 'https://kr.api.riotgames.com/lol/summoner/v4',
});

export default client;
