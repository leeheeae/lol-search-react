//챔피언 태그 내역
export const champTagsConfig = {
  Fighter: '전사',
  Mage: '마법사',
  Assassin: '암살자',
  Marksman: '원거리딜러',
  Tank: '탱커',
  Support: '서포터',
};

export const lankNameConfig = {
  RANKED_SOLO_5x5: '솔로랭크 5X5',
  RANKED_FLEX_SR: '자유랭크 5X5',
};

export const gameModeConfig = {
  CLASSIC: '소환사의 협곡',
  ODIN: '',
  ARAM: '무작위 총력전',
  TUTORIAL: '튜토리얼',
  URF: 'URF',
  DOOMBOTSTEEMO: 'Bot',
  ONEFORALL: '',
  ASCENSION: '',
  FIRSTBLOOD: '',
  KINGPORO: '전설의 포로왕',
  SIEGE: '',
  ASSASSINATE: '',
  ARSR: '무작위 총력전',
  DARKSTAR: '',
  STARGUARDIAN: '별 수호자 침공',
  PROJECT: '프로젝트: 과충전모드',
  GAMEMODEX: '돌격! 넥서스',
  ODYSSEY: '오디세이:구출',
  NEXUSBLITZ: '뒤틀린 숲',
  ULTBOOK: '궁극기 주문서',
};

//챔피언 리스트 탭
export const champListTabs = [
  { name: '전체', tag: '' },
  { name: '암살자', tag: 'Assassin' },
  { name: '전사', tag: 'Fighter' },
  { name: '마법사', tag: 'Mage' },
  { name: '원거리딜러', tag: 'Marksman' },
  { name: '서포터', tag: 'Support' },
  { name: '탱커', tag: 'Tank' },
];

//match Game Type
export const gameType = ['', 'ranked', 'normal', 'tutorial'];

//RecordTabs
export const RecordTabsConfig = [
  '전체',
  '솔로랭크',
  '자유랭크',
  '일반',
  '무작위총력전',
];

//QUEUETYPE
const QUEUETYPE = {
  400: 'norm', //Normal Draft Pick
  420: 'solo',
  430: 'norm',
  440: 'flex',
  450: 'aram',
  700: 'clash',
  800: 'ai', // Deprecated
  810: 'ai', // Deprecated
  820: 'ai', // Deprecated
  830: 'ai',
  840: 'ai',
  850: 'ai',
  900: 'urf',
  920: 'poro',
  1020: 'ofa',
  1300: 'nbg',
  1400: 'usb', // Ultimate Spellbook
  2000: 'tut',
  2010: 'tut',
  2020: 'tut',
};

//QUEUETYPE ko
export const ko = {
  solo: '솔로랭크',
  normal: '일반',
  ranked: '랭크',
  aram: '무작위총력전',
  flex: '자유랭크',
  nbg: '돌넥',
  usb: '궁주문서',
  urf: 'URF',
  ofa: '단일',
  ai: 'AI대전',
  poro: '포로왕',
  tut: '튜토리얼',
  etc: '기타',
  clash: '격전',
};

//QUEUETYPE MATCH
export const quequeTyepMatch = (value) => {
  const key = Object.keys(ko).find((key) => ko[key] === value);
  const result = Object.keys(QUEUETYPE).find(
    (queue) => QUEUETYPE[queue] === key,
  );

  if (result === undefined) return '';
  return result;
};

export const matchGameType = (queue) => {
  const que = Number(queue);

  if (que === 400 || que === 430 || que === 450) {
    return 'normal';
  }

  if (que === 420 || que === 440) {
    return 'ranked';
  }

  return '';
};

//게임 이름
export const matchGameName = (queue) => {
  const que = Number(queue);
  let name;

  if (que === 400 || que === 430 || que === 450) {
    name = 'normal';
  }

  if (que === 420 || que === 440) {
    name = 'ranked';
  }

  const lowerName = name.toLowerCase();
  return ko[lowerName];
};

//전적 이름으로 기록 찾기
export const targetSummoner = (participants, summoner) => {
  const result = participants.filter(
    (part) => part.summonerName === summoner,
  )[0];
  return result;
};

//게임승리여부
export const gameResultSearch = (targetSummoner) => {
  const result = targetSummoner.win;
  return result;
};
